import {ContentView} from "@nativescript/core";

@NativeClass()
export class AdvancedCamera extends ContentView {

    public onLoaded() {
        super.onLoaded();
    }

    public record(): void {}

    public stop(): Promise<any> {
        return new Promise((resolve, reject) => {});
    }
}