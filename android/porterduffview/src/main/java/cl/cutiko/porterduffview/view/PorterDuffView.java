package cl.cutiko.porterduffview.view;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.view.View;
import android.widget.Toast;

public class PorterDuffView extends View {

    private PorterDuff.Mode MODE = PorterDuff.Mode.XOR;
    private Paint paint;
    private final Bitmap destination, source;

    public PorterDuffView(Context context, Bitmap destination, Bitmap source) {
        super(context);
        paint = new Paint(Paint.ANTI_ALIAS_FLAG);
        this.destination = destination;
        this.source = source;
        setBackgroundColor(Color.RED);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        //canvas.drawColor(Color.BLACK);
        //canvas.drawBitmap(destination, 0, 0, paint);
        //canvas.drawBitmap(source, 0, 0, paint);
        //int sc = canvas.saveLayer(0, 0, 200, 200, null, Canvas.ALL_SAVE_FLAG);
        canvas.drawBitmap(destination, 0, 200, paint);
        paint.setXfermode(new PorterDuffXfermode(MODE));
        canvas.drawBitmap(source, 50, 250, paint);
        //paint.setXfermode(null);
        //canvas.restoreToCount(sc);

        Toast.makeText(getContext(), "test 1", Toast.LENGTH_LONG).show();
    }
}
