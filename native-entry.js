// Bundled into www/native.js and exposed as window.Native for the app code.
import { Capacitor } from '@capacitor/core';
import { BleClient } from '@capacitor-community/bluetooth-le';
import { KeepAwake } from '@capacitor-community/keep-awake';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { StatusBar } from '@capacitor/status-bar';
import { App } from '@capacitor/app';
import { Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
window.Native = { Capacitor, BleClient, KeepAwake, TextToSpeech, StatusBar, App, Filesystem, Share };
