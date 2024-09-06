
			document.addEventListener("DOMContentLoaded", function() {
            var canvas = document.getElementById("sig-canvas");
            var ctx = canvas.getContext("2d");
            var drawing = false;
            var mousePos = {
                x: 0,
                y: 0
            };
            var lastPos = mousePos;

            canvas.addEventListener("mousedown", function(e) {
                drawing = true;
                lastPos = getMousePos(canvas, e);
            }, false);

            canvas.addEventListener("mouseup", function(e) {
                drawing = false;
            }, false);

            canvas.addEventListener("mousemove", function(e) {
                mousePos = getMousePos(canvas, e);
                renderCanvas();
            }, false);

            canvas.addEventListener("touchstart", function(e) {
                mousePos = getTouchPos(canvas, e);
                var touch = e.touches[0];
                var mouseEvent = new MouseEvent("mousedown", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
                canvas.dispatchEvent(mouseEvent);
            }, false);

            canvas.addEventListener("touchend", function(e) {
                var mouseEvent = new MouseEvent("mouseup", {});
                canvas.dispatchEvent(mouseEvent);
            }, false);

            canvas.addEventListener("touchmove", function(e) {
                var touch = e.touches[0];
                var mouseEvent = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
                canvas.dispatchEvent(mouseEvent);
            }, false);

            document.body.addEventListener("touchstart", function(e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
            }, false);
            document.body.addEventListener("touchend", function(e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
            }, false);
            document.body.addEventListener("touchmove", function(e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
            }, false);

            function getMousePos(canvasDom, mouseEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                    x: mouseEvent.clientX - rect.left,
                    y: mouseEvent.clientY - rect.top
                };
            }

            function getTouchPos(canvasDom, touchEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                    x: touchEvent.touches[0].clientX - rect.left,
                    y: touchEvent.touches[0].clientY - rect.top
                };
            }

            function renderCanvas() {
                if (drawing) {
                    ctx.moveTo(lastPos.x, lastPos.y);
                    ctx.lineTo(mousePos.x, mousePos.y);
                    ctx.stroke();
                    lastPos = mousePos;
                }
            }

            document.getElementById("sig-clearBtn").addEventListener("click", function() {
                canvas.width = canvas.width;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                document.getElementById("sig-dataUrl").value = "";
                document.getElementById("sig-image").src = "";
                document.getElementById("client-signature").src = "";
                console.log('test1');
            }, false);

            document.getElementById("sig-submitBtn").addEventListener("click", function() {
                var dataUrl = canvas.toDataURL();
                document.getElementById("sig-dataUrl").value = dataUrl;
                document.getElementById("sig-image").src = dataUrl;
                document.getElementById("client-signature").src = dataUrl;
                document.getElementById("signatureboutique").value = dataUrl;


            }, false);

            document.getElementById("sig-upload").addEventListener("change", function(e) {
                var file = e.target.files[0];
                var reader = new FileReader();
                reader.onload = function(event) {
                    var img = new Image();
                    img.onload = function() {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    }
                    img.src = event.target.result;
                    document.getElementById("sig-dataUrl").value = img.src;
                    document.getElementById("sig-image").src = img.src;
                    document.getElementById("client-signature").src = img.src;
                    document.getElementById("signatureboutique").value = img.src;


                }
                reader.readAsDataURL(file);
            });
        });	
		