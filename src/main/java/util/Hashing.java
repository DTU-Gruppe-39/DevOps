package util;

import org.mindrot.jbcrypt.BCrypt;

/**
 * Created by magnus
 */
public class Hashing {
  public static String hashPassword(String password) {
    return BCrypt.hashpw(password, BCrypt.gensalt(12));
  }
  public static boolean verifyHash(String password, String hash) {
    return BCrypt.checkpw(password, hash);
  }
}
