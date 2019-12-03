package util;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by magnus
 */
class HashingTest {
  @Test
  public void checkHashingTrue() {
    assertTrue(Hashing.verifyHash("kqly",Hashing.hashPassword("kqly")));
  }

  @Test
  public void checkHashingFalse() {
    assertFalse(Hashing.verifyHash("kql",Hashing.hashPassword("kqly")));
  }

}