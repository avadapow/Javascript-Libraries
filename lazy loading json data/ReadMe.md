## Avada lazyloading library

> A simple library in javascript to lazy load json data

### How to use

> First of all you need to include jquery and our js file lazyload.js into your html code

```html
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
<script src="./lazyload.js"></script>
```
> In the next step create an element inside a lazy container and add the values you want to show in two qurly brackets like bellow

```html
<div id="lazy-container">
	<div id="item-lazy">
		<h1 style="color:#868">{{title}}</h1>
		<p style="color:#868686">{{description}}</p>
		<div style="background:#e7e7e7">{{element}}</div>
	</div>
</div>
```

> The last step is to call our function

```javascript
	avadapow_lazyload("OUR_API_URL", "#item-lazy", "#lazy-container", "Text to show in the end");
```

### Full code example

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<!-- ############ EXAMPLE CODE ############ -->
<div id="lazy-container">
	<div id="item-lazy">
		<h1 style="color:#868">{{title}}</h1>
		<p style="color:#868686">{{description}}</p>
		<div style="background:#e7e7e7">{{element}}</div>
	</div>
</div>
<!-- ############ EXAMPLE CODE ############ -->

<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
<script src="./lazyload.js"></script>
<script>
//just call the lazyload function and ta daaaa!!!
avadapow_lazyload("OUR_API_URL", "#item-lazy", "#lazy-container", "Text to show in the end");
</script>
</body>
</html>
```