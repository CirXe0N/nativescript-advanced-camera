# NativeScript Advanced Camera

A highly customizable NativeScript camera plugin that can easily be embedded in a view. 

**NOTES**: 
- This plugin is still in development, so for now forget `highly customizable`. :)
- For feature requests and bugs, feel free to open a new issue.

### Table of contents:
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Properties](#properties)
    - [Common Properties](#common-properties)
    - [iOS Specific Properties](#ios-specific-properties)
- [Methods](#methods)
    - [Common Methods](#common-Methods)
    - [iOS Specific Properties](#ios-specific-methods)

### Prerequisites
* [NativeScript 7+](https://docs.nativescript.org/start/quick-setup)

### Installation
```commandline
$ tns plugin add nativescript-advanced-camera
```

### Usage

#### Angular 11+

HTML Template: `home.component.html`
```html
<AdvancedCamera height="300dp" width="300dp" backgroundColor="black" (loaded)="onLoaded($event)"></AdvancedCamera>
```

Component: `home.component.ts`
```typescript
import {AdvancedCamera} from "nativescript-advanced-camera";

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
        this.cam.stop().then((videoPath) => {
            console.log(videoPath);
        });
    }
}
```

### Features

*Note*: To add features to this list, feel free to open a new issue.

| Feature                              | Android               | iOS                   |
| ---------------------------------    | :-------------------: | :--------------------:|
| Start & Stop Video Recording         | :heavy_check_mark:    | :heavy_check_mark:    |
| Take Photos                          | :x:                   | :x:                   |
| Write Video / Photos to Library      | :heavy_check_mark:    | :heavy_check_mark:    | 
| Switch between Front / Back Camera   | :x:                   | :x:                   |

### Properties

#### Common Properties

| Property                            | Type      | Description                                                                          |
| ----------------------------------- | :-------: | :----------------------------------------------------------------------------------: | 
| writeFilesToPhoneLibrary            | Boolean   | Enable / Disable saving the files to phone library.                                  | 

#### iOS Specific Properties

| Property                            | Type      | Description                                                                          |
| ----------------------------------- | :-------: | :----------------------------------------------------------------------------------: | 
| shouldKeepViewAtOrientationChanges  | Boolean   | Enable / Disable keeping the view with the same bounds when the orientation changes. | 
| shouldRespondToOrientationChanges   | Boolean   | Enable / Disable the video following device orientation.                             | 
| writeFilesToPhoneLibrary            | Boolean   | Enable / Disable saving the files to phone library.                                  | 

### Methods

#### Common Methods

| Method               | Description                                                                            |
| -------------------- | :------------------------------------------------------------------------------------: | 
| record()             | Starts recording a video.                                                              | 
| stop()               | Stops the video recording and returns a Promise that gives the file path of the video. |

#### iOS Specific Methods

| Method               | Description                                                                          |
| -------------------- | :----------------------------------------------------------------------------------: | 
| resetOrientation()   | Reset and redraw the preview layer orientation.                                      |
