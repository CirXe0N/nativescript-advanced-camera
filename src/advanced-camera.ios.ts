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
}