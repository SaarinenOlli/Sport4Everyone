package fi.academy;


import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Unit test for simple App.
 */
public class AppTest{
    private App ap;
    String name;

    @Before
    public void setUp() {
        ap = new App();
        name = "Bob";
    }

    @Test
    public void testName(){
        assertEquals("testataan nimi", "Hello, Bob.", ap.testName(name));
    }

    @Test
    public void testNull() {
        name = null;
        assertEquals("testataan null", "Hello, my friend.", ap.testName(name));
    }

    @Test
    public void testShouting() {
        name = name.toUpperCase();
        assertEquals("testataan huuto", "HELLO, BOB!", ap.testName(name));
    }


}