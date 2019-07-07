package cl.cutiko.syncretism.toast;

import android.widget.Toast;

import java.util.HashMap;
import java.util.Map;

public class Durations {

    private static final String LONG = "LONG";
    private static final String SHORT = "SHORT";
    private final static Map<String, Object> map = new HashMap<>();

    public static Map<String, Object> getMap() {
        map.put(LONG, Toast.LENGTH_LONG);
        map.put(SHORT, Toast.LENGTH_SHORT);
        return map;
    }

}
