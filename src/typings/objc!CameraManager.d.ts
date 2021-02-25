
declare class CameraManager extends NSObject implements AVCaptureFileOutputRecordingDelegate, AVCaptureMetadataOutputObjectsDelegate, UIGestureRecognizerDelegate {

	static alloc(): CameraManager; // inherited from NSObject

	static new(): CameraManager; // inherited from NSObject

	readonly cameraIsReady: boolean;

	captureSession: AVCaptureSession;

	hasFrontCamera: boolean;

	imageAlbumName: string;

	shouldFlipFrontCameraImage: boolean;

	shouldKeepViewAtOrientationChanges: boolean;

	shouldRespondToOrientationChanges: boolean;

	showAccessPermissionPopupAutomatically: boolean;

	showErrorsToUsers: boolean;

	videoAlbumName: string;

	writeFilesToPhoneLibrary: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addLayerPreviewToViewNewCameraOutputModeCompletion(view: UIView, newCameraOutputMode: number, completion: () => void): number;

	addPreviewLayerToView(view: UIView): number;

	addPreviewLayerToViewNewCameraOutputMode(view: UIView, newCameraOutputMode: number): number;

	askUserForCameraPermission(completion: (p1: boolean) => void): void;

	captureOutputDidFinishRecordingToOutputFileAtURLFromConnectionsError(output: AVCaptureFileOutput, outputFileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[], error: NSError): void;

	captureOutputDidOutputMetadataObjectsFromConnection(_: AVCaptureMetadataOutput, metadataObjects: NSArray<AVMetadataObject> | AVMetadataObject[], _2: AVCaptureConnection): void;

	captureOutputDidStartRecordingToOutputFileAtURLFromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[]): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetOrientation(): void;

	respondsToSelector(aSelector: string): boolean;

	resumeCaptureSession(): void;

	retainCount(): number;

	self(): this;

	startRecordingVideo(): void;

	stopAndRemoveCaptureSession(): void;

	stopCaptureSession(): void;

	stopVideoRecording(completion: (p1: NSURL, p2: NSError) => void): void;
}

declare var CameraManagerVersionNumber: number;

declare var CameraManagerVersionString: interop.Reference<number>;
