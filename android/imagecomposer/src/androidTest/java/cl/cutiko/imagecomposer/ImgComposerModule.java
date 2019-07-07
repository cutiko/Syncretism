package cl.cutiko.imagecomposer;

import android.content.Context;
import android.support.test.InstrumentationRegistry;
import android.support.test.runner.AndroidJUnit4;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.junit.Assert.*;

/**
 * Instrumented test, which will execute on an Android device.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
public class ImgComposerModule {

    private ImageComposerModule composerModule;

    @Rule
    public void startComposer(){
        //composerModule = new ImageComposerModule(InstrumentationRegistry.getTargetContext())
    }

    @Test
    public void testPaint() {
        // Context of the app under test.
        Context appContext = InstrumentationRegistry.getTargetContext();

        assertEquals("cl.cutiko.imagecomposer.test", appContext.getPackageName());
    }
}
