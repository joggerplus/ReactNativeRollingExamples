# React Native Invoke

Invoke any native code directly from Javascript in React Native (without wrapping it first with a native manager)

## Install

#### iOS

* In your project root, `npm install react-native-invoke --save`

* In Xcode, in Project Navigator (left pane), right-click on the `Libraries` > `Add files to [project name]` <br> Add `./node_modules/react-native-invoke/ios/RNInvoke.xcodeproj`

* In Xcode, in Project Navigator (left pane), click on your project (top) and select the `Build Phases` tab (right pane) <br> In the `Link Binary With Libraries` section add `libRNInvoke.a` 

* In Xcode, in Project Navigator (left pane), click on your project (top) and select the `Build Settings` tab (right pane) <br> In the `Header Search Paths` section add `$(SRCROOT)/../node_modules/react-native-invoke/ios` <br> Make sure on the right to mark this new path `recursive`

#### Android

Coming soon
<br><br>
## Executing calls to native

```js
// execute a single call
const _getContentOffset = Invoke.call(_scrollView, 'contentOffset');
const {x, y} = await Invoke.execute(_getContentOffset);
```

> Invoke.execute returns a promise and only when it runs code is actaully being run in native.

```js
// execute multiple calls
const _getScrollView = Invoke.call(_scrollParent, 'scrollView');
const _getContentOffset = Invoke.call(_getScrollView, 'contentOffset');
const {x, y} = await Invoke.execute(_getContentOffset);
```

> Only simple serializable objects can pass between native and JS. Since many methods take a complex object as argument, we support making multiple calls in one execution so the result of one call can be passed to the next one without going through JS.
<br><br>

## Example invocations

###### 1. from Objective-C

```objc
CGPoint offset = [componentView.scrollView contentOffset];
```

###### &nbsp;&nbsp;&nbsp; to Javascript

```js
const _getScrollView = Invoke.call(_componentView, 'scrollView');
const _getOffset = Invoke.call(_getScrollView, 'contentOffset');
const {x, y} = await Invoke.execute(_getOffset);
```
<br>
###### 2. from Objective-C

```objc
CGRect frame = componentView.frame;
```

###### &nbsp;&nbsp;&nbsp; to Javascript

```js
const _getFrame = Invoke.call(_componentView, 'frame');
let {x, y, width, height} = await Invoke.execute(_getFrame);
```
<br>
###### 3. from Objective-C

```objc
[componentView setFrame:frame];
```

###### &nbsp;&nbsp;&nbsp; to Javascript

```js
const _setFrame = Invoke.call(_componentView, 'setFrame:', Invoke.IOS.CGRect({x, y, width, height}));
await Invoke.execute(_setFrame);
```
<br>
###### 4. from Objective-C

```objc
id textView = [componentView valueForKey:@'_textView'];
CGRect pos = [textView caretRectForPosition:textView.selectedTextRange.start];
```

###### &nbsp;&nbsp;&nbsp; to Javascript

```js
const _getTextView = Invoke.call(_componentView, 'valueForKey:', '_textView');
const _getSelectedTextRange = Invoke.call(_getTextView, 'selectedTextRange');
const _getStartPosition = Invoke.call(_getSelectedTextRange, 'start');
const _getCaretRect = Invoke.call(_getTextView, 'caretRectForPosition:', _getStartPosition);
const {x, y, width, height} = await Invoke.execute(_getCaretRect);
```
<br>
## Full example project

Available [here](example), open the `/example` folder, run `npm install` and then open `/example/ios/example.xcodeproj` in Xcode.
<br><br>
## API

##### > `Invoke.execute(invocation)`

Send the entire invocation to native and execute it. Code runs in native only when we reach this command. Returns a promise with the final return value (make sure it's serializable).
<br><br>
##### > `Invoke.call(target, methodSignature, arg1, arg2, ...)`

Prepare a call for later execution.
<br><br>
##### > `Invoke.React.view(componentRef)`

Returns (in later execution) the native view backing the React component ref.<br>Example:
```js
<ScrollView refreshControl={<RefreshControl refreshing={true} ref='refresh'/>} />
const _rctRefreshControl = Invoke.React.view(this.refs['refresh']);
```
<br>
##### > `Invoke.IOS.CGPoint({x, y})`

Returns (in later execution) an iOS point.
<br><br>
##### > `Invoke.IOS.CGRect({x, y, width, height})`

Returns (in later execution) an iOS rect.
<br><br>
## License

MIT

