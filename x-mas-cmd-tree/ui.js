'use strict';
const React = require('react');
const {Text} = require('ink');

const App = ({name = 'Stranger'}) => {
	const getRandomColor = () => "#" + Math.round(Math.random() * 0xffffff).toString(16)
	return (
		<>
			<Text>	       *             ,</Text>
			<Text>                   _/^\_</Text>
			<Text>                  &lt;     &gt;</Text>
			<Text> *                 /.-.\         *</Text>
			<Text>          *        `/&amp;\`                   *</Text>
			<Text color={getRandomColor()}>                  ,@.*;@,</Text>
			<Text>                 /_o.I %_\    *</Text>
			<Text>    *           (`'--:o(_@;</Text>
			<Text>               /`;--.,__ `')             *</Text>
			<Text color={getRandomColor()}>              ;@`o % O,*`'`&amp;\ </Text>
			<Text>        *    (`'--)_@ ;o %'()\      *</Text>
			<Text>             /`;--._`''--._O'@;</Text>
			<Text>            /&amp;*,()~o`;-.,_ `&quot;&quot;`)</Text>
			<Text color={getRandomColor()}> *          /`,@ ;+&amp; () o*`;-';\</Text>
			<Text>           (`&quot;&quot;--.,_0 +% @' &amp;()\</Text>
			<Text>           /-.,_    ``''--....-'`)  *</Text>
			<Text color={getRandomColor()}>      *    /@%;o`:;'--,.__   __.'\</Text>
			<Text color={getRandomColor()}>          ;*,&amp;(); @ % &amp;^;~`&quot;`o;@();         *</Text>
			<Text>          /(); o^~; &amp; ().o@*&amp;`;&amp;%O\</Text>
			<Text>    jgs   `&quot;=&quot;==&quot;&quot;==,,,.,=&quot;==&quot;===&quot;`</Text>
			<Text>       __.----.(\-''#####---...___...-----._</Text>
			<Text>     '`         \)_`&quot;&quot;&quot;&quot;&quot;`</Text>
			<Text>Hello, <Text color={getRandomColor()}>{name}</Text></Text>
		</>
)};

module.exports = App;
