import {ContentView} from "@nativescript/core";

export class AdvancedCamera extends ContentView {
    private cam: CameraManager;

    constructor() {
        super();
    }

    public onLoaded() {
        super.onLoaded();
        this.cam = new CameraManager();
        this.cam.addPreviewLayerToView(this.nativeView);
    }

    public record(): void {
        this.cam.startRecordingVideo();
    }

    public stop(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.cam.stopVideoRecording(resolve);
        });
    }

    public resetOrientation(): void {
        this.cam.resetOrientation();
    }

    public get shouldFlipFrontCameraImage() {
        return this.cam.shouldFlipFrontCameraImage;
    }

    public set shouldFlipFrontCameraImage(value: boolean) {
        this.cam.shouldFlipFrontCameraImage = value;
    }

    public get shouldKeepViewAtOrientationChanges() {
        return this.cam.shouldKeepViewAtOrientationChanges;
    }

    public set shouldKeepViewAtOrientationChanges(value: boolean) {
        this.cam.shouldKeepViewAtOrientationChanges = value;
    }

    public get shouldRespondToOrientationChanges() {
        return this.cam.shouldRespondToOrientationChanges;
    }

    public set shouldRespondToOrientationChanges(value: boolean) {
        this.cam.shouldRespondToOrientationChanges = value;
    }

    public get writeFilesToPhoneLibrary() {
        return this.cam.writeFilesToPhoneLibrary;
    }

    public set writeFilesToPhoneLibrary(value: boolean) {
        this.cam.writeFilesToPhoneLibrary = value;
    }
}