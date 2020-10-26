import Button from './button';import Example from './example';import Todo from './todo';export default [ {meta: {"widgetName":"Button","title":"按钮","desc":"方便用户点击操作","tag":"按钮 button 按键 主按钮 背景按钮 主要按钮 基本按钮","props":{"lugiaHidden":{"type":"boolean","desc":"是否渲染当前组件","defaultValue":false},"disabled":{"type":"boolean","desc":"按钮是否禁用，true 禁用 false 可用","defaultValue":false},"shape":{"type":"ButtonShape","desc":"设置按钮形状，可以设置为 circle 或者不设","defaultValue":"default"},"type":{"type":"ButtonType","desc":"支持多种不同的按钮风格，可选值为 primary、success、warning、danger 或者不设","defaultValue":"primary"},"plain":{"type":"boolean","desc":"是否为朴素按钮"},"size":{"type":"ButtonSize","desc":"设置按钮大小，可选值为 small、large、bigger 或者不设","defaultValue":"default"},"loading":{"type":"boolean","desc":"设置按钮加载状态"},"circle":{"type":"boolean","desc":"设置圆形按钮"},"icon":{"type":"icon","desc":"设置按钮前置图标类型"},"suffixIcon":{"type":"icon","desc":"设置按钮后置图标类型"},"text":{"type":"string | React.node","desc":"设置按钮的文本内容","defaultValue":"Button"},"block":{"type":"boolean","desc":"按钮宽度为父元素宽度","defaultValue":false},"transition":{"type":"boolean","desc":"是否开启过渡效果，默认开启true，关闭为false","defaultValue":false,"propsDefaultValue":true}},"events":{"onClick":{"desc":"点击按钮时触发","args":[{"name":"event","desc":"点击的DOM事件","type":"Object"}]}},"type":{"ButtonShape":[{"value":"default","text":"默认型"},{"value":"round","text":"圆角型"}],"ButtonType":[{"value":"default","text":"默认类型"},{"value":"primary","text":"主题类型"},{"value":"success","text":"成功类型"},{"value":"warning","text":"警告类型"},{"value":"danger","text":"危险类型"},{"value":"link","text":"链接类型"}],"ButtonSize":[{"value":"default","text":"默认尺寸"},{"value":"small","text":"小尺寸"},{"value":"large","text":"大尺寸"}],"ButtonStyle":{"width":{"type":"number","desc":"组件宽度"},"margin":{"type":"number | Object","desc":"组件外间距"},"color":{"type":"string","desc":"组件颜色"}}},"category":["通用"],"designInfo":{"PlainButton":{"sequence":1,"title":"朴素按钮","desc":"朴素按钮","tag":"按钮 button 次要按钮 边框按钮 线框按钮","props":{"plain":true},"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["background"],["border"],["height"],["width"],["padding"],["margin"],["borderRadius"],["boxShadow"]],"hover":[["background"],["border"],["boxShadow"]],"active":[["background"],["border"],["boxShadow"]],"disabled":[["background"],["border"],["boxShadow"]],"focus":[["background"],["border"],["boxShadow"]]},"ButtonText":{"name":"按钮文字样式","desc":"为按钮文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonIcon":{"name":"按钮前置图标样式","desc":"为按钮前置图标配置样式","normal":[["color"],["font"],["margin","right"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonSuffixIcon":{"name":"按钮后置图标样式","desc":"为按钮后置图标配置样式","normal":[["color"],["font"],["margin","left"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}}},"IconButton":{"sequence":1,"title":"图标按钮","desc":"图标按钮","tag":"按钮 button 组合按钮 图标背景按钮 Icon按钮","props":{"icon":"lugia-icon-logo_lugia"},"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["background"],["border"],["height"],["width"],["padding"],["margin"],["borderRadius"],["boxShadow"]],"hover":[["background"],["border"],["boxShadow"]],"active":[["background"],["border"],["boxShadow"]],"disabled":[["background"],["border"],["boxShadow"]],"focus":[["background"],["border"],["boxShadow"]]},"ButtonText":{"name":"按钮文字样式","desc":"为按钮文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonIcon":{"name":"按钮前置图标样式","desc":"为按钮前置图标配置样式","normal":[["color"],["font"],["margin","right"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonSuffixIcon":{"name":"按钮后置图标样式","desc":"为按钮后置图标配置样式","normal":[["color"],["font"],["margin","left"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}}},"CircleButton":{"sequence":1,"title":"仅图标按钮","desc":"仅图标按钮","tag":"按钮 button 图标按钮 Icon按钮","props":{"circle":true,"icon":"lugia-icon-logo_lugia","text":"","type":"primary"},"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["background"],["border"],["height"],["width"],["padding"],["margin"],["borderRadius"],["boxShadow"]],"hover":[["background"],["border"],["boxShadow"]],"active":[["background"],["border"],["boxShadow"]],"disabled":[["background"],["border"],["boxShadow"]],"focus":[["background"],["border"],["boxShadow"]]},"ButtonText":{"name":"按钮文字样式","desc":"为按钮文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonIcon":{"name":"按钮图标样式","desc":"为按钮图标配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}}},"LinkButton":{"sequence":1,"title":"文字按钮","desc":"文字按钮","tag":"按钮 button 文本按钮 链接按钮 链接文本 Label按钮","props":{"type":"link"},"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["height"],["width"]]},"ButtonText":{"name":"文字样式","desc":"为文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}}},"LinkIconButton":{"sequence":1,"title":"文字图标按钮","desc":"文字图标按钮","tag":"按钮 button 文本链接 链接按钮 图标文本按钮","props":{"type":"link","icon":"lugia-icon-logo_lugia"},"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["height"],["width"]]},"ButtonText":{"name":"文字样式","desc":"为文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonIcon":{"name":"前置图标样式","desc":"为前置图标配置样式","normal":[["color"],["font"],["margin","right"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonSuffixIcon":{"name":"按钮后置图标样式","desc":"为按钮后置图标配置样式","normal":[["color"],["font"],["margin","left"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}}}},"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["background"],["border"],["height"],["width"],["padding"],["margin"],["borderRadius"],["boxShadow"]],"hover":[["background"],["border"],["boxShadow"]],"active":[["background"],["border"],["boxShadow"]],"disabled":[["background"],["border"],["boxShadow"]],"focus":[["background"],["border"],["boxShadow"]]},"ButtonText":{"name":"按钮文字样式","desc":"为按钮文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonIcon":{"name":"按钮前置图标样式","desc":"为按钮前置图标配置样式","normal":[["color"],["font"],["margin","right"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonSuffixIcon":{"name":"按钮后置图标样式","desc":"为按钮后置图标配置样式","normal":[["color"],["font"],["margin","left"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}},"childrenWidget":[]},target: Button,screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII='},{meta: {"widgetName":"Button","title":"朴素按钮","desc":"朴素按钮","tag":"按钮 button 按键 主按钮 背景按钮 主要按钮 基本按钮","props":{"lugiaHidden":{"type":"boolean","desc":"是否渲染当前组件","defaultValue":false},"disabled":{"type":"boolean","desc":"按钮是否禁用，true 禁用 false 可用","defaultValue":false},"shape":{"type":"ButtonShape","desc":"设置按钮形状，可以设置为 circle 或者不设","defaultValue":"default"},"type":{"type":"ButtonType","desc":"支持多种不同的按钮风格，可选值为 primary、success、warning、danger 或者不设","defaultValue":"primary"},"plain":{"type":"boolean","desc":"是否为朴素按钮","defaultValue":true},"size":{"type":"ButtonSize","desc":"设置按钮大小，可选值为 small、large、bigger 或者不设","defaultValue":"default"},"loading":{"type":"boolean","desc":"设置按钮加载状态"},"circle":{"type":"boolean","desc":"设置圆形按钮"},"icon":{"type":"icon","desc":"设置按钮前置图标类型"},"suffixIcon":{"type":"icon","desc":"设置按钮后置图标类型"},"text":{"type":"string | React.node","desc":"设置按钮的文本内容","defaultValue":"Button"},"block":{"type":"boolean","desc":"按钮宽度为父元素宽度","defaultValue":false},"transition":{"type":"boolean","desc":"是否开启过渡效果，默认开启true，关闭为false","defaultValue":false,"propsDefaultValue":true}},"events":{"onClick":{"desc":"点击按钮时触发","args":[{"name":"event","desc":"点击的DOM事件","type":"Object"}]}},"type":{"ButtonShape":[{"value":"default","text":"默认型"},{"value":"round","text":"圆角型"}],"ButtonType":[{"value":"default","text":"默认类型"},{"value":"primary","text":"主题类型"},{"value":"success","text":"成功类型"},{"value":"warning","text":"警告类型"},{"value":"danger","text":"危险类型"},{"value":"link","text":"链接类型"}],"ButtonSize":[{"value":"default","text":"默认尺寸"},{"value":"small","text":"小尺寸"},{"value":"large","text":"大尺寸"}],"ButtonStyle":{"width":{"type":"number","desc":"组件宽度"},"margin":{"type":"number | Object","desc":"组件外间距"},"color":{"type":"string","desc":"组件颜色"}}},"category":["通用"],"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["background"],["border"],["height"],["width"],["padding"],["margin"],["borderRadius"],["boxShadow"]],"hover":[["background"],["border"],["boxShadow"]],"active":[["background"],["border"],["boxShadow"]],"disabled":[["background"],["border"],["boxShadow"]],"focus":[["background"],["border"],["boxShadow"]]},"ButtonText":{"name":"按钮文字样式","desc":"为按钮文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonIcon":{"name":"按钮前置图标样式","desc":"为按钮前置图标配置样式","normal":[["color"],["font"],["margin","right"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonSuffixIcon":{"name":"按钮后置图标样式","desc":"为按钮后置图标配置样式","normal":[["color"],["font"],["margin","left"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}},"childrenWidget":[],"aliasName":"PlainButton"},target: Button,screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII='},{meta: {"widgetName":"Button","title":"图标按钮","desc":"图标按钮","tag":"按钮 button 按键 主按钮 背景按钮 主要按钮 基本按钮","props":{"lugiaHidden":{"type":"boolean","desc":"是否渲染当前组件","defaultValue":false},"disabled":{"type":"boolean","desc":"按钮是否禁用，true 禁用 false 可用","defaultValue":false},"shape":{"type":"ButtonShape","desc":"设置按钮形状，可以设置为 circle 或者不设","defaultValue":"default"},"type":{"type":"ButtonType","desc":"支持多种不同的按钮风格，可选值为 primary、success、warning、danger 或者不设","defaultValue":"primary"},"plain":{"type":"boolean","desc":"是否为朴素按钮"},"size":{"type":"ButtonSize","desc":"设置按钮大小，可选值为 small、large、bigger 或者不设","defaultValue":"default"},"loading":{"type":"boolean","desc":"设置按钮加载状态"},"circle":{"type":"boolean","desc":"设置圆形按钮"},"icon":{"type":"icon","desc":"设置按钮前置图标类型","defaultValue":"lugia-icon-logo_lugia"},"suffixIcon":{"type":"icon","desc":"设置按钮后置图标类型"},"text":{"type":"string | React.node","desc":"设置按钮的文本内容","defaultValue":"Button"},"block":{"type":"boolean","desc":"按钮宽度为父元素宽度","defaultValue":false},"transition":{"type":"boolean","desc":"是否开启过渡效果，默认开启true，关闭为false","defaultValue":false,"propsDefaultValue":true}},"events":{"onClick":{"desc":"点击按钮时触发","args":[{"name":"event","desc":"点击的DOM事件","type":"Object"}]}},"type":{"ButtonShape":[{"value":"default","text":"默认型"},{"value":"round","text":"圆角型"}],"ButtonType":[{"value":"default","text":"默认类型"},{"value":"primary","text":"主题类型"},{"value":"success","text":"成功类型"},{"value":"warning","text":"警告类型"},{"value":"danger","text":"危险类型"},{"value":"link","text":"链接类型"}],"ButtonSize":[{"value":"default","text":"默认尺寸"},{"value":"small","text":"小尺寸"},{"value":"large","text":"大尺寸"}],"ButtonStyle":{"width":{"type":"number","desc":"组件宽度"},"margin":{"type":"number | Object","desc":"组件外间距"},"color":{"type":"string","desc":"组件颜色"}}},"category":["通用"],"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["background"],["border"],["height"],["width"],["padding"],["margin"],["borderRadius"],["boxShadow"]],"hover":[["background"],["border"],["boxShadow"]],"active":[["background"],["border"],["boxShadow"]],"disabled":[["background"],["border"],["boxShadow"]],"focus":[["background"],["border"],["boxShadow"]]},"ButtonText":{"name":"按钮文字样式","desc":"为按钮文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonIcon":{"name":"按钮前置图标样式","desc":"为按钮前置图标配置样式","normal":[["color"],["font"],["margin","right"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonSuffixIcon":{"name":"按钮后置图标样式","desc":"为按钮后置图标配置样式","normal":[["color"],["font"],["margin","left"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}},"childrenWidget":[],"aliasName":"IconButton"},target: Button,screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII='},{meta: {"widgetName":"Button","title":"仅图标按钮","desc":"仅图标按钮","tag":"按钮 button 按键 主按钮 背景按钮 主要按钮 基本按钮","props":{"lugiaHidden":{"type":"boolean","desc":"是否渲染当前组件","defaultValue":false},"disabled":{"type":"boolean","desc":"按钮是否禁用，true 禁用 false 可用","defaultValue":false},"shape":{"type":"ButtonShape","desc":"设置按钮形状，可以设置为 circle 或者不设","defaultValue":"default"},"type":{"type":"ButtonType","desc":"支持多种不同的按钮风格，可选值为 primary、success、warning、danger 或者不设","defaultValue":"primary"},"plain":{"type":"boolean","desc":"是否为朴素按钮"},"size":{"type":"ButtonSize","desc":"设置按钮大小，可选值为 small、large、bigger 或者不设","defaultValue":"default"},"loading":{"type":"boolean","desc":"设置按钮加载状态"},"circle":{"type":"boolean","desc":"设置圆形按钮","defaultValue":true},"icon":{"type":"icon","desc":"设置按钮前置图标类型","defaultValue":"lugia-icon-logo_lugia"},"suffixIcon":{"type":"icon","desc":"设置按钮后置图标类型"},"text":{"type":"string | React.node","desc":"设置按钮的文本内容","defaultValue":""},"block":{"type":"boolean","desc":"按钮宽度为父元素宽度","defaultValue":false},"transition":{"type":"boolean","desc":"是否开启过渡效果，默认开启true，关闭为false","defaultValue":false,"propsDefaultValue":true}},"events":{"onClick":{"desc":"点击按钮时触发","args":[{"name":"event","desc":"点击的DOM事件","type":"Object"}]}},"type":{"ButtonShape":[{"value":"default","text":"默认型"},{"value":"round","text":"圆角型"}],"ButtonType":[{"value":"default","text":"默认类型"},{"value":"primary","text":"主题类型"},{"value":"success","text":"成功类型"},{"value":"warning","text":"警告类型"},{"value":"danger","text":"危险类型"},{"value":"link","text":"链接类型"}],"ButtonSize":[{"value":"default","text":"默认尺寸"},{"value":"small","text":"小尺寸"},{"value":"large","text":"大尺寸"}],"ButtonStyle":{"width":{"type":"number","desc":"组件宽度"},"margin":{"type":"number | Object","desc":"组件外间距"},"color":{"type":"string","desc":"组件颜色"}}},"category":["通用"],"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["background"],["border"],["height"],["width"],["padding"],["margin"],["borderRadius"],["boxShadow"]],"hover":[["background"],["border"],["boxShadow"]],"active":[["background"],["border"],["boxShadow"]],"disabled":[["background"],["border"],["boxShadow"]],"focus":[["background"],["border"],["boxShadow"]]},"ButtonText":{"name":"按钮文字样式","desc":"为按钮文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonIcon":{"name":"按钮图标样式","desc":"为按钮图标配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}},"childrenWidget":[],"aliasName":"CircleButton"},target: Button,screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII='},{meta: {"widgetName":"Button","title":"文字按钮","desc":"文字按钮","tag":"按钮 button 按键 主按钮 背景按钮 主要按钮 基本按钮","props":{"lugiaHidden":{"type":"boolean","desc":"是否渲染当前组件","defaultValue":false},"disabled":{"type":"boolean","desc":"按钮是否禁用，true 禁用 false 可用","defaultValue":false},"shape":{"type":"ButtonShape","desc":"设置按钮形状，可以设置为 circle 或者不设","defaultValue":"default"},"type":{"type":"ButtonType","desc":"支持多种不同的按钮风格，可选值为 primary、success、warning、danger 或者不设","defaultValue":"link"},"plain":{"type":"boolean","desc":"是否为朴素按钮"},"size":{"type":"ButtonSize","desc":"设置按钮大小，可选值为 small、large、bigger 或者不设","defaultValue":"default"},"loading":{"type":"boolean","desc":"设置按钮加载状态"},"circle":{"type":"boolean","desc":"设置圆形按钮"},"icon":{"type":"icon","desc":"设置按钮前置图标类型"},"suffixIcon":{"type":"icon","desc":"设置按钮后置图标类型"},"text":{"type":"string | React.node","desc":"设置按钮的文本内容","defaultValue":"Button"},"block":{"type":"boolean","desc":"按钮宽度为父元素宽度","defaultValue":false},"transition":{"type":"boolean","desc":"是否开启过渡效果，默认开启true，关闭为false","defaultValue":false,"propsDefaultValue":true}},"events":{"onClick":{"desc":"点击按钮时触发","args":[{"name":"event","desc":"点击的DOM事件","type":"Object"}]}},"type":{"ButtonShape":[{"value":"default","text":"默认型"},{"value":"round","text":"圆角型"}],"ButtonType":[{"value":"default","text":"默认类型"},{"value":"primary","text":"主题类型"},{"value":"success","text":"成功类型"},{"value":"warning","text":"警告类型"},{"value":"danger","text":"危险类型"},{"value":"link","text":"链接类型"}],"ButtonSize":[{"value":"default","text":"默认尺寸"},{"value":"small","text":"小尺寸"},{"value":"large","text":"大尺寸"}],"ButtonStyle":{"width":{"type":"number","desc":"组件宽度"},"margin":{"type":"number | Object","desc":"组件外间距"},"color":{"type":"string","desc":"组件颜色"}}},"category":["通用"],"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["height"],["width"]]},"ButtonText":{"name":"文字样式","desc":"为文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}},"childrenWidget":[],"aliasName":"LinkButton"},target: Button,screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII='},{meta: {"widgetName":"Button","title":"文字图标按钮","desc":"文字图标按钮","tag":"按钮 button 按键 主按钮 背景按钮 主要按钮 基本按钮","props":{"lugiaHidden":{"type":"boolean","desc":"是否渲染当前组件","defaultValue":false},"disabled":{"type":"boolean","desc":"按钮是否禁用，true 禁用 false 可用","defaultValue":false},"shape":{"type":"ButtonShape","desc":"设置按钮形状，可以设置为 circle 或者不设","defaultValue":"default"},"type":{"type":"ButtonType","desc":"支持多种不同的按钮风格，可选值为 primary、success、warning、danger 或者不设","defaultValue":"link"},"plain":{"type":"boolean","desc":"是否为朴素按钮"},"size":{"type":"ButtonSize","desc":"设置按钮大小，可选值为 small、large、bigger 或者不设","defaultValue":"default"},"loading":{"type":"boolean","desc":"设置按钮加载状态"},"circle":{"type":"boolean","desc":"设置圆形按钮"},"icon":{"type":"icon","desc":"设置按钮前置图标类型","defaultValue":"lugia-icon-logo_lugia"},"suffixIcon":{"type":"icon","desc":"设置按钮后置图标类型"},"text":{"type":"string | React.node","desc":"设置按钮的文本内容","defaultValue":"Button"},"block":{"type":"boolean","desc":"按钮宽度为父元素宽度","defaultValue":false},"transition":{"type":"boolean","desc":"是否开启过渡效果，默认开启true，关闭为false","defaultValue":false,"propsDefaultValue":true}},"events":{"onClick":{"desc":"点击按钮时触发","args":[{"name":"event","desc":"点击的DOM事件","type":"Object"}]}},"type":{"ButtonShape":[{"value":"default","text":"默认型"},{"value":"round","text":"圆角型"}],"ButtonType":[{"value":"default","text":"默认类型"},{"value":"primary","text":"主题类型"},{"value":"success","text":"成功类型"},{"value":"warning","text":"警告类型"},{"value":"danger","text":"危险类型"},{"value":"link","text":"链接类型"}],"ButtonSize":[{"value":"default","text":"默认尺寸"},{"value":"small","text":"小尺寸"},{"value":"large","text":"大尺寸"}],"ButtonStyle":{"width":{"type":"number","desc":"组件宽度"},"margin":{"type":"number | Object","desc":"组件外间距"},"color":{"type":"string","desc":"组件颜色"}}},"category":["通用"],"theme":{"Container":{"name":"按钮整体样式","desc":"为按钮配置整体样式","normal":[["height"],["width"]]},"ButtonText":{"name":"文字样式","desc":"为文字配置样式","normal":[["color"],["font"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonIcon":{"name":"前置图标样式","desc":"为前置图标配置样式","normal":[["color"],["font"],["margin","right"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]},"ButtonSuffixIcon":{"name":"按钮后置图标样式","desc":"为按钮后置图标配置样式","normal":[["color"],["font"],["margin","left"]],"hover":[["color"]],"active":[["color"]],"disabled":[["color"]],"focus":[["color"]]}},"childrenWidget":[],"aliasName":"LinkIconButton"},target: Button,screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII='},{meta: {"widgetName":"Example","title":"示例组件","desc":"组件描述信息","props":{"data":{"type":"Array","desc":"属性说明描述","propsDefaultValue":"属性默认值","meta":[]}},"events":{"onChange":{"desc":"事件说明描述","args":[{"name":"事件的参数一","desc":"参数描述","type":"数据类型"},{"name":"事件的参数二","desc":"参数描述","type":"boolean"}]}},"category":["数据展示"],"theme":{"Container":{"name":"外部容器","desc":"外部容器样式","normal":[["width"],["height"],["background"]],"hover":[],"active":[],"disabled":[]}},"childrenWidget":[]},target: Example,screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII='},{meta: {"widgetName":"Todo","title":"待办组件","desc":"组件描述信息","props":{"data":{"type":"Object[]","desc":"待办数据","propsDefaultValue":{"title":"待办事项","description":"描述信息","buttonText":"添加"},"meta":[{"key":"title","title":"组件内标题","type":"string"},{"key":"description","title":"组件内描述","type":"string"},{"key":"buttonText","title":"新增按钮的文案","type":"string"}]}},"events":{"onChange":{"desc":"内容改变时触发","args":[{"name":"newValue","desc":"改变后的数据信息","type":"Object[]"},{"name":"oldValue","desc":"改变前的数据信息","type":"Object[]"}]}},"category":["数据录入"],"theme":{"Container":{"name":"外部容器","desc":"外部容器样式","normal":[["width"],["height"],["background"]],"hover":[],"clicked":[],"disabled":[]},"Title":{"name":"标题","desc":"标题的样式","normal":[["margin"],["boxShadow"],["border"],["color"],["font"]],"hover":[],"clicked":[],"disabled":[]},"ButtonTheme":{"name":"添加按钮","theme":{"Container":{"name":"新增按钮","desc":"新增按钮的样式","normal":[["margin"],["background"],["border"],["color"],["font"]],"hover":[],"clicked":[],"disabled":[]}}},"InputTheme":{"name":"输入框样式","theme":{"Container":{"name":"输入框样式","desc":"输入框的样式","normal":[["margin"],["border"],["color"],["font"]],"hover":[],"clicked":[],"disabled":[]}}}},"childrenWidget":[]},target: Todo,screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII='}, ];