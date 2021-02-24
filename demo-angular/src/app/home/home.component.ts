import {Component} from "@angular/core";
import {AdvancedCamera} from "nativescript-advanced-camera";
import {registerElement} from "@nativescript/angular";
import {EventData} from "@nativescript/core";

registerElement('AdvancedCamera', () => AdvancedCamera);

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    private cam: AdvancedCamera;

    public record(): void {
        console.log('Start Recording');
        this.cam.record();
    }

    public stop(): void {
        console.log('Stop Recording');
        this.cam.stop().then((videoPath) => {
            console.log(videoPath);
        });
    }

    public onLoaded(event: EventData) {
        console.log('Cam Loaded');
        this.cam = <AdvancedCamera> event.object;
    }
}
