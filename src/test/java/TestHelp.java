import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class TestHelp {

    @Test
    public void testMultiplicationOfZeroIntegersShouldReturnZero() {
        // assert statements
        assertEquals(0, 10*0, "10 x 0 must be 0");
        assertEquals(0, 0*10, "0 x 10 must be 0");
        assertEquals(0, 0*0, "0 x 0 must be 0");
    }
}