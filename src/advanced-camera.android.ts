import {AndroidApplication, Application, ContentView, Observable, PropertyChangeData} from "@nativescript/core";
import fancycamera = com.github.triniwiz.fancycamera;

@NativeClass
class EventListener extends fancycamera.CameraEventListenerUI {
    public file: Observable = new Observable();

    public onCameraVideo(file: any): void {
        this.file.set('file', file);
    }

    public onReady(): void {}
    public onCameraOpen(): void {}
    public onCameraClose(): void {}
    public onCameraPhoto(file: any): void {}
    public onCameraAnalysis(analysis: any): void {}
    public onCameraError(message: any, ex: any): void {}
    public onCameraVideoStart(): void {}
}

export class AdvancedCamera extends ContentView {
    private cam: fancycamera.FancyCamera;
    private listener: EventListener;
    private isRecording: boolean = false;

    readonly _context;

    public onLoaded() {
        super.onLoaded();
        this.listener = new EventListener();

        this.cam = new fancycamera.FancyCamera(this._context);
        this.cam.setListener(this.listener);
        this.cam.setPosition(fancycamera.CameraPosition.FRONT);
        this.cam.getPreviewView().getParent().removeAllViews();
        this.nativeView.addView(this.cam.getPreviewView());

        if (!this.cam.hasPermission()) {
            this.cam.requestPermission();
        }

        Application.android.on(AndroidApplication.activityRequestPermissionsEvent, (args) => {
            if (this.cam.hasPermission()) {
                this.cam.startPreview();
            }
        });

        Application.android.on(AndroidApplication.activityPausedEvent, (args) => {
            this.cam.stopPreview();
        });
    }

    public record(): void {
        if (!this.isRecording) {
            this.cam.startRecording();
            this.isRecording = true;
        }
    }

    public stop(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.listener.file.off(Observable.propertyChangeEvent);
            this.cam.stopRecording();
            this.listener.file.on(
                Observable.propertyChangeEvent,
                (event: PropertyChangeData) => {
                    resolve(event.value);
                    this.listener.file.off(Observable.propertyChangeEvent);
                    this.isRecording = false;
                }
            );
        });
    }

    public get writeFilesToPhoneLibrary() {
        return this.cam.getSaveToGallery();
    }

    public set writeFilesToPhoneLibrary(value: boolean) {
        this.cam.setSaveToGallery(value);
    }
}
