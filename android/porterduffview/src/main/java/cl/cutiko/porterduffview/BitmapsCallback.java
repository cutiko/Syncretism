package cl.cutiko.porterduffview;

import android.graphics.Bitmap;
import android.widget.FrameLayout;

public interface BitmapsCallback {

    void bitmapsReady(Bitmap destination, Bitmap source, FrameLayout frameLayout);

}
