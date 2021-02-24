import {ContentView} from "@nativescript/core";

export declare class AdvancedCamera extends ContentView {

    public record(): void;

    public stop(): Promise<any>;

    public requestCameraPermissions(explanationText?: string): Promise<boolean>;

    public requestAudioPermissions(explanationText?: string): Promise<boolean>;
}
