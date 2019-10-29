package util;

import data.DTO.User;
import io.jsonwebtoken.*;

import javax.ws.rs.NotAuthorizedException;

/**
 * Created by magnus
 */
public class JWTutil {
  //Skal importeres fra et andet sted senere
  private static String secret = "kqly";

  public static String generateToken (User user) {
    Claims tokenClaims = Jwts.claims()
            .setSubject(user.getEmail());
    tokenClaims.put("id",user.getId());
    tokenClaims.put("role",user.getRole());
    return Jwts.builder()
            .setClaims(tokenClaims)
            .signWith(SignatureAlgorithm.HS512, secret)
            .compact();
  }

  public static Claims parseToken (String jwt) {
    try {
      Jws<Claims> jws = Jwts.parser()
              .setSigningKey(secret)
              .parseClaimsJws(jwt);
      return jws.getBody();
    }
    catch (IllegalArgumentException e) {
      throw new NotAuthorizedException("Illegal arugment");
    }
    catch (UnsupportedJwtException e) {
      throw new NotAuthorizedException("Token not supported");
    }
    catch (MalformedJwtException e) {
      throw new NotAuthorizedException("Malformed token");
    }
    catch (SignatureException e) {
      throw new NotAuthorizedException("The token signature is invalid ");
    }
    catch (ExpiredJwtException e) {
      throw new NotAuthorizedException("");
    }
  }
}
