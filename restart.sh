#!/usr/bin/env bash
adb shell am force-stop cl.cutiko.syncretism && adb shell am start -n cl.cutiko.syncretism/.MainActivity
