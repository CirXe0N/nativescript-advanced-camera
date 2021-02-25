import {ContentView} from "@nativescript/core";

export declare class AdvancedCamera extends ContentView {
    public shouldFlipFrontCameraImage: boolean;
    public shouldKeepViewAtOrientationChanges: boolean;
    public shouldRespondToOrientationChanges: boolean;
    public writeFilesToPhoneLibrary: boolean;

    public record(): void;

    public stop(): Promise<any>;

    public resetOrientation(): void;

    public requestCameraPermissions(explanationText?: string): Promise<boolean>;

    public requestAudioPermissions(explanationText?: string): Promise<boolean>;
}
