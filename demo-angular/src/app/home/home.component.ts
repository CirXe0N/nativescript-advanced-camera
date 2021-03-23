import {Component} from "@angular/core";
import {AdvancedCamera} from "nativescript-advanced-camera";
import {registerElement} from "@nativescript/angular";
import {EventData, isIOS} from "@nativescript/core";

registerElement('AdvancedCamera', () => AdvancedCamera);

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    private cam: AdvancedCamera;

    public onLoaded(event: EventData) {
        console.log('Cam Loaded');
        this.cam = <AdvancedCamera> event.object;
    }

    public record(): void {
        console.log('Start Recording');
        this.cam.record();
    }

    public stop(): void {
        console.log('Stop Recording');
        this.cam.stop().then((file) => {
            const path = isIOS ? file.path : file.getPath();
            console.log(path);
        });
    }

    public writeFilesToPhoneLibrary(): void {
        const value = !this.cam.writeFilesToPhoneLibrary;
        console.log(`Write files to phone library: ${value}`);
        this.cam.writeFilesToPhoneLibrary = value;
    }

    public shouldKeepViewAtOrientationChanges(): void {
        const value = !this.cam.shouldKeepViewAtOrientationChanges;
        console.log(`Should keep view at orientation changes: ${value}`);
        this.cam.shouldKeepViewAtOrientationChanges = value;
    }

    public shouldRespondToOrientationChanges(): void {
        const value = !this.cam.shouldRespondToOrientationChanges;
        console.log(`Should respond orientation changes: ${value}`);
        this.cam.shouldKeepViewAtOrientationChanges = value;
    }

    public resetOrientation(): void {
        this.cam.resetOrientation();
    }
}
