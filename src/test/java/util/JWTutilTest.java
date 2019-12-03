package util;

import data.DTO.Role;
import data.DTO.User;
import io.jsonwebtoken.Claims;
import org.junit.jupiter.api.Test;

import javax.ws.rs.NotAuthorizedException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

/**
 * Created by magnus
 */
class JWTutilTest {
  public User getTestUser() {
    User user = new User();
    user.setRole(Role.ProjectManager);
    user.setEmail("kqly@gmail.com");
    user.setId("1");
    return user;
  }

  @Test
  public void checkingGeneratingOfJWT () {
    String JWT = JWTutil.generateToken(getTestUser());
    assertEquals("1",JWTutil.getUserId(JWT));

    Claims JWTClaims = JWTutil.parseToken(JWT);
    assertEquals("kqly@gmail.com",JWTClaims.getSubject());
    assertEquals(Role.ProjectManager,Role.valueOf((String) JWTClaims.get("role")));
  }

  @Test
  public void checkingIllegalToken () {
    String malformedToken = "eyJhbGcrgrgrg.ggregerege";
    assertThrows(NotAuthorizedException.class, () -> {
      JWTutil.parseToken(malformedToken);
    });
  }

  @Test
  public void checkingMalformedToken () {
    String malformedToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWdudXNrb2NoLmtvY2hAZ21haWwuY29tIiwiaWQiOiI1ZGNkNzZhZjFjOWQ0NDAwMDBiZDVhMTUiLCJyb2xlIjoiRGV2ZWxvcGVyIn0.7edlKM_flmeR8FWOEaCo9EkRyDrFhTiC1liGuYejPJgbuFPEMZ5YlBMYkQTxAOAPZTpAtpa2jUiO6L2MwvSldw";
    assertThrows(NotAuthorizedException.class, () -> {
      JWTutil.parseToken(malformedToken);
    });
  }

  @Test
  public void checkingWrongSignatureToken () {
    String malformedToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWdudXNrb2NoLmtvY2hAZ21haWwuY29tIiwiaWQiOiI1ZGNkNzZhZjFjOWQ0NDAwMDBiZDVhMTUiLCJyb2xlIjoiRGV2ZWxvcGVyIn0.7edlKM_flmeR8FWOEaCo9EkRyDrFhTiC1liGuYejPJgbuFPEMZ5YlBMYkQTa2jUiO6L2MwvSldw";
    assertThrows(NotAuthorizedException.class, () -> {
      JWTutil.parseToken(malformedToken);
    });
  }

  @Test
  public void checkingExpiredToken () {
    //Not yet implemented
  }
}