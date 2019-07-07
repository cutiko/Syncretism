package cl.cutiko.porterduffview;

import android.graphics.Bitmap;
import android.widget.ImageView;

public interface BitmapsCallback {

    void bitmapsReady(Bitmap destination, Bitmap source, ImageView imageView);

}
