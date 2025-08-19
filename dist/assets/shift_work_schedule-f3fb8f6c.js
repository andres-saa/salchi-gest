import{au as Oe,_ as Ie,r,l as Ve,G as Ne,c as je,q as We,U as x,I as Fe,ar as te,a as B,o as c,b as p,i,h as v,d as l,u as O,F as oe,e as ie,j as I,t as u,k as re,ag as He,n as ce,N as Me,p as Be,m as Re}from"./index-e0d1eab6.js";import{u as pe,e as Z,s as Ae,a as ue,b as me,c as be}from"./userService-5865529d.js";import{s as Je}from"./siteService-77184632.js";import{f as fe,s as X}from"./format-8cf56335.js";var Ge=`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}
`,Pe={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Oe.extend({name:"editor",css:Ge,classes:Pe});(function(){try{return window.Quill}catch{return null}})();const m=V=>(Be("data-v-141ee6c2"),V=V(),Re(),V),Qe={style:{"margin-top":"4rem"},class:"px-2 mx-0 col-12"},Ye={key:0,class:"user-info",style:{display:"flex","flex-direction":"column","align-items":"center"}},Ke=["src"],Ze={class:"col-12 p-0 mt-4"},Xe={key:0},el={key:0,class:"p-0 my-1"},ll=m(()=>l("b",null," Desde: ",-1)),nl={key:1,class:"p-0 my-1"},tl=m(()=>l("b",null," Hasta: ",-1)),ol={key:2,class:"p-0 my-1 text-xl",style:{color:"green"}},il=m(()=>l("b",null," Descansa ",-1)),rl=[il],al={class:"p-0 my-1"},sl=m(()=>l("b",null,"Cargo:",-1)),dl={class:"p-0 my-1"},ql=m(()=>l("b",null,"Telefono:",-1)),cl={class:"p-0 my-1"},pl=m(()=>l("b",null,"Contrato",-1)),ul={class:"col-12 p-0 m-0 my-2"},ml={class:"col-12 p-0 m-0 my-2"},bl={class:"col-12 p-0 m-0 my-2"},fl={class:"col-12 p-0 m-0 my-2"},vl={class:"col-12 p-0 my-2"},wl={class:"col-12 p-0 my-2"},gl=m(()=>l("p",{class:"col-12 m-0 p-0 py-2"},"Desde:",-1)),hl=m(()=>l("p",{class:"col-12 m-0 p-0 py-2"},"Hasta:",-1)),kl=m(()=>l("div",{class:"confirmation-content"},[l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),l("span",null,"¿Estás seguro de que quieres eliminar este día de trabajo y todos sus registros?")],-1)),yl=m(()=>l("div",{class:"confirmation-content"},[l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),l("span",null,"¿Estás seguro de que quieres eliminar este registro?")],-1)),xl=m(()=>l("h3",null,"Nueva semana",-1)),_l={class:"col-12 p-0 m-0 mb-2 shadow-3",style:{}},Dl={class:"grid px-8 md:mx-auto",style:{"max-width":"800px"}},Sl={class:"col-12 md:col-5 py-2",style:{height:"4rem"}},Cl={class:"col-12 md:col-5 py-2",style:{height:"4rem"}},Tl={class:"col-12 md:col-2 py-2 m-0",style:{height:"4rem"}},zl={class:"grid",style:{margin:"auto"}},Ul={class:"col-2 p-0 px-2",style:{height:"80vh",width:"min-content","overflow-y":"auto"}},Ll={class:"p-0 text-sm",style:{display:"flex","justify-content":"center"}},$l={style:{display:"flex",gap:"1rem","flex-direction":"column"},class:"pb-3 m-auto"},El=["onDragstart"],Ol=["onClick","src","onError"],Il={class:"my-0 py-0",style:{"min-width":"max-content","font-weight":"bold","text-transform":"uppercase"}},Vl={class:"my-0 py-0",style:{"min-width":"min-content","text-transform":"uppercase","text-align":"center"}},Nl={class:"col",style:{height:"80vh","min-width":"300px","overflow-y":"auto"}},jl={class:"col-12 pb-6"},Wl={style:{display:"flex",gap:"0rem","flex-direction":"column"}},Fl={class:"py-0 px-4 text-center col-12 m-0 p-0 text",style:{"font-weight":"bold","text-shadow":"0 0 3px black","text-transform":"uppercase"}},Hl={style:{"overflow-x":"auto"}},Ml={style:{}},Bl=["onDrop"],Rl={class:"py-0 my-0 text-sm",style:{"min-width":"max-content","font-weight":"bold","text-transform":"uppercase"}},Al=["onClick","src","onError"],Jl={key:0,class:"text-sm"},Gl={class:"py-0 my-0 text-sm text-center"},Pl={key:1,class:"text-sm"},Ql={class:"py-0 my-0"},Yl=m(()=>l("p",{class:"py-0 my-0"},[l("b",{style:{color:"green"}},"DESCANSA")],-1)),Kl={style:{"text-transform":"uppercase"}},Zl=m(()=>l("p",null,"Hora de llegada:",-1)),Xl=m(()=>l("p",null,"Hora de salida:",-1)),en={class:"col-12 p-0",style:{display:"flex","justify-content":"space-between"}},ln={__name:"shift_work_schedule",setup(V){r("");const R=r(!1),d=r(null);r(null);const ae=n=>{d.value=n,R.value=!0},N=r(!1),w=r(new Date),h=r(new Date),A=Ve(),q=Ne(),j=r(!1),J=r(null),g=r(),W=r(),T=r(),L=r(),z=r(!1),b=r(null),_=r(null),S=r(new Date),C=r(new Date),se=je(()=>!T.value||!L.value?"":`${fe(T.value,"dd/MM/yyyy")} - ${fe(L.value,"dd/MM/yyyy")}`),ve=()=>{w.value=T.value||new Date,h.value=L.value||new Date,N.value=!0},we=()=>{N.value=!1},U=async()=>{T.value=w.value,L.value=h.value,N.value=!1,await K(T.value),E()},de=()=>{const n=new Date;w.value=X(n,{weekStartsOn:1}),h.value=Z(n,{weekStartsOn:1}),U()},ge=()=>{const n=X(new Date,{weekStartsOn:1});w.value=Ae(n,7),h.value=Z(w.value,{weekStartsOn:1}),U()},he=()=>{const n=new Date;w.value=ue(n),h.value=me(n),U()},ke=()=>{const n=new Date;w.value=ue(be(n,1)),h.value=me(be(n,1)),U()},ye=n=>{J.value=n,j.value=!0},xe=async()=>{if(j.value=!1,q.setLoading(!0,"borrando"),!J.value)return;const n=await fetch(`${x}/shift_work_records/${J.value}`,{method:"DELETE"});n.ok?(E(),q.setLoading(!1,"borrando")):(console.error("Error al eliminar el registro:",await n.text()),alert("Hubo un error al eliminar el registro."),q.setLoading(!1,"borrando")),J.value=null},F=r(!1),G=r(null),_e=n=>{G.value=n,F.value=!0},De=async()=>{if(F.value=!1,!G.value)return;q.setLoading(!0,"borrando"),(await fetch(`${x}/shift_work_days/${G.value}`,{method:"DELETE"})).ok?(Q.value=Q.value.filter(e=>e.id!==G.value),q.setLoading(!1,"borrando")):(alert("Hubo un error al eliminar el día de trabajo."),q.setLoading(!1,"borrando"))},Se={Monday:"#22c55e",Tuesday:"#F59E0B",Wednesday:"#EF4444",Thursday:"#3B82F6",Friday:"#A855F7",Saturday:"#10B981",Sunday:"#EC4899"},Ce=n=>{if(!(n instanceof Date))return console.error("getDayColor: date is not a Date object",n),"#FFFFFF";const e=n.toLocaleDateString("en-US",{weekday:"long"});return Se[e]},P=r([]),Q=r([]),ee=(n,e)=>{const o={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"},s=n==null?void 0:n.trim().toLowerCase();e.target.src=o[s]||o.default},$=r(null),Y=r(!1),le=r(new Date);We(async()=>{W.value=await Je.getSites(),g.value=W.value.filter(o=>o.site_id==A.rawUserData.site_id)[0],$.value=W.value.filter(o=>o.site_id==A.rawUserData.site_id)[0];const n=await pe.getUsersBySiteId(A.rawUserData.site_id);P.value=n.filter(o=>o.status=="activo"),await fetch(`${x}/shift_work_days_with_records`),await K(new Date),await E()});const Te=async()=>{const n=new Date,e=new Date(n.setDate(n.getDate()+(7-n.getDay())+1));w.value=X(e,{weekStartsOn:1}),h.value=Z(e,{weekStartsOn:1}),U()},ze=async()=>{const n=new Date,e=new Date(n.setDate(n.getDate()+(7-n.getDay())+8));w.value=X(e,{weekStartsOn:1}),h.value=Z(e,{weekStartsOn:1}),U()};Fe(g,async(n,e)=>{var o,s;if(te()==1104&&((o=g.value.site_name)==null?void 0:o.toLowerCase())!="kennedy"&&((s=g.value.site_name)==null?void 0:s.toLowerCase())!="montes"){alert("No tienes permiso para administrar esta sede"),g.value=e;return}else{const k=await pe.getUsersBySiteId(n.site_id);P.value=k.filter(f=>f.status=="activo"),$.value=n,de(),E(),await K(new Date)}});const E=async()=>{var s,k;if(te()==1104&&((s=g.value.site_name)==null?void 0:s.toLowerCase())!="kennedy"&&((k=g.value.site_name)==null?void 0:k.toLowerCase())!="montes")return;if(q.setLoading(!0,"cargando horario"),!g.value||!T.value||!L.value){alert("No olvide seleccionar una sede y un rango de fechas");return}const n=T.value.toISOString().split("T")[0],e=L.value.toISOString().split("T")[0],o=await fetch(`${x}/shift_filtered_work_days?site_id=${g.value.site_id}&start_date=${n}&end_date=${e}`);if(o.ok){q.setLoading(!1,"cargando horario");const H=await o.json();Q.value=H.map(f=>(f.date=new Date(f.date),f.date.setDate(f.date.getDate()+1),f.users=f.records.map(D=>{let M=P.value.find(y=>y.id===D.employer_id);if(M){let y={...M};const t=new Date(`${f.date.toISOString().split("T")[0]}T${D.start_time}`),a=new Date(`${f.date.toISOString().split("T")[0]}T${D.end_time}`);return y.arrivalTime=t,y.departureTime=a,y.hoursWorked=(a-t)/36e5,y.rest=D.rest,y}return null}).filter(D=>D!=null),q.setLoading(!1,"cargando horario"),f))}else q.setLoading(!1,"cargando horario"),alert("Failed to fetch workdays")};async function K(n){if(!$.value)return;let e=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().split("T")[0];const o=await fetch(`${x}/shift_work_days`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:e,site_id:$.value.site_id})});o.ok?E():console.error("Error al agregar un nuevo día laboral",await o.text())}const Ue=n=>{b.value=n},Le=n=>{_.value=n,z.value=!0},$e=async()=>{if(z.value=!1,q.setLoading(!0,"cargando"),!b.value||!_.value)return;let n=S.value.toISOString().split("T")[1].slice(0,8),e=C.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:b.value.id,work_day_id:_.value.id,start_time:n,end_time:e};await fetch(`${x}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),b.value.arrivalTime=S.value,b.value.departureTime=C.value,b.value.hoursWorked=(C.value-S.value)/36e5,_.value.users.push(b.value),z.value=!1,b.value=null,_.value=null,q.setLoading(!1,"cargando")},Ee=async()=>{if(z.value=!1,q.setLoading(!0,"cargando"),!b.value||!_.value)return;let n=S.value.toISOString().split("T")[1].slice(0,8),e=C.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:b.value.id,work_day_id:_.value.id,start_time:n,end_time:e,rest:!0};await fetch(`${x}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});const s={...b.value};s.arrivalTime=S.value,s.departureTime=C.value,s.hoursWorked=(C.value-S.value)/36e5,s.rest=!0,_.value.users.push(s),z.value=!1,b.value=null,_.value=null,q.setLoading(!1,"cargando")};return(n,e)=>{var D,M,y;const o=B("Button"),s=B("Dialog"),k=B("Calendar"),H=B("Dropdown"),f=B("InputText");return c(),p("div",Qe,[i(s,{visible:R.value,"onUpdate:visible":e[2]||(e[2]=t=>R.value=t),modal:"",closable:!1,style:{width:"30rem"}},{footer:v(()=>[i(o,{label:"Cerrar",severity:"help",onClick:e[1]||(e[1]=t=>R.value=!1)})]),default:v(()=>{var t;return[l("h4",null,u(d.value.name),1),d.value?(c(),p("div",Ye,[l("img",{class:"shadow-3",src:`${O(x)}/read-product-image/300/employer-${d.value.dni}`,onError:e[0]||(e[0]=a=>ee(d.value.gender,a)),alt:"Foto del empleado",style:{width:"100%","aspect-ratio":"1 / 1","border-radius":"0.5rem","object-fit":"cover"}},null,40,Ke),l("div",Ze,[d.value.arrivalTime&&d.value.departureTime?(c(),p("div",Xe,[d.value.rest?re("",!0):(c(),p("p",el,[ll,I(u(new Date(d.value.arrivalTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)])),d.value.rest?(c(),p("p",ol,rl)):(c(),p("p",nl,[tl,I(" "+u(new Date(d.value.departureTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)]))])):re("",!0),l("p",al,[sl,I(" "+u(d.value.position),1)]),l("p",dl,[ql,I(" "+u(d.value.phone),1)]),l("p",cl,[pl,I(" "+u((t=d.value.contract_type)==null?void 0:t.toLowerCase()),1)])])])):re("",!0)]}),_:1},8,["visible"]),i(s,{visible:N.value,"onUpdate:visible":e[5]||(e[5]=t=>N.value=t),modal:"",closable:""},{footer:v(()=>[i(o,{severity:"danger",label:"Cancelar",onClick:we,class:"p-button-text"}),i(o,{severity:"success",label:"Aceptar",onClick:U})]),default:v(()=>[l("div",null,[l("div",ul,[i(o,{class:"col-12 p-1",severity:"success",label:"Semana entrante",onClick:Te})]),l("div",ml,[i(o,{class:"col-12 p-1",severity:"secondary",label:"Dentro de 2 semanas",onClick:ze})]),l("div",bl,[i(o,{class:"col-12 p-1",severity:"danger",label:"Esta semana",onClick:de})]),l("div",fl,[i(o,{class:"col-12 p-1",severity:"help",label:"Semana pasada",onClick:ge})]),l("div",vl,[i(o,{class:"col-12 p-1",severity:"warning",label:"Este mes",onClick:he})]),l("div",wl,[i(o,{class:"col-12 p-1",severity:"primary",label:"Mes pasado",onClick:ke})])]),gl,i(k,{class:"col-12 m-0 p-0",modelValue:w.value,"onUpdate:modelValue":e[3]||(e[3]=t=>w.value=t),showIcon:""},null,8,["modelValue"]),hl,i(k,{class:"col-12 m-0 p-0",modelValue:h.value,"onUpdate:modelValue":e[4]||(e[4]=t=>h.value=t),showIcon:""},null,8,["modelValue"])]),_:1},8,["visible"]),i(s,{visible:F.value,"onUpdate:visible":e[7]||(e[7]=t=>F.value=t),modal:"",style:{width:"350px"},header:"Confirmar eliminación",closable:!1},{footer:v(()=>[i(o,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[6]||(e[6]=t=>F.value=!1)}),i(o,{label:"Sí",icon:"pi pi-check",class:"p-button",onClick:De})]),default:v(()=>[kl]),_:1},8,["visible"]),i(s,{visible:j.value,"onUpdate:visible":e[9]||(e[9]=t=>j.value=t),modal:"",style:{width:"350px"},header:"Confirmar eliminación",closable:!1},{footer:v(()=>[i(o,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[8]||(e[8]=()=>j.value=!1)}),i(o,{label:"Sí",icon:"pi pi-check",class:"p-button",onClick:xe})]),default:v(()=>[yl]),_:1},8,["visible"]),i(s,{visible:Y.value,"onUpdate:visible":e[14]||(e[14]=t=>Y.value=t),style:{width:"22rem"},modal:"",closeOnEscape:"",onClose:e[15]||(e[15]=t=>Y.value=!1)},{footer:v(()=>[i(o,{label:"cancelar",onClick:e[12]||(e[12]=t=>Y.value=!1),class:"p-button-danger"}),i(o,{label:"Agregar",onClick:e[13]||(e[13]=t=>K(le.value)),class:"p-button-success"})]),default:v(()=>[xl,i(k,{class:"my-4",modelValue:le.value,"onUpdate:modelValue":e[10]||(e[10]=t=>le.value=t),showIcon:""},null,8,["modelValue"]),i(H,{class:"col-12 p-0",disabled:"",modelValue:$.value,"onUpdate:modelValue":e[11]||(e[11]=t=>$.value=t),options:W.value,optionLabel:"site_name",placeholder:"Select a site"},null,8,["modelValue","options"])]),_:1},8,["visible"]),l("div",_l,[l("div",Dl,[l("div",Sl,[i(H,{disabled:!((y=O(He)["Horarios de trabajo admin"])!=null&&y.includes((M=(D=O(A))==null?void 0:D.rawUserData)==null?void 0:M.rol))&&O(te)()!=1104,style:{height:"100%"},class:"col-12 p-0 m-0",modelValue:g.value,"onUpdate:modelValue":e[16]||(e[16]=t=>g.value=t),options:W.value,optionLabel:"site_name"},null,8,["disabled","modelValue","options"])]),l("div",Cl,[i(f,{style:{height:"100%"},class:"col-12 text-center m-0",readonly:"",modelValue:se.value,"onUpdate:modelValue":e[17]||(e[17]=t=>se.value=t),onClick:ve},null,8,["modelValue"])]),l("div",Tl,[i(o,{severity:"help",class:"mb-3",label:"Buscar",icon:"pi pi-search",onClick:E})])])]),l("div",zl,[l("div",Ul,[l("div",Ll,[l("div",$l,[(c(!0),p(oe,null,ie(P.value,t=>(c(),p("div",{key:t.id,draggable:"true",style:{display:"flex","flex-direction":"column","align-items":"center"},onDragstart:a=>Ue(t)},[l("img",{onClick:a=>ae(t),class:"shadow-2 p-1",src:`${O(x)}/read-product-image/96/employer-${t.dni}`,alt:"user.name",onError:a=>ee(t.gender,a),style:{width:"3rem","object-fit":"cover",height:"3rem","border-radius":"50%"}},null,40,Ol),l("p",Il,u(t.name.split(" ").slice(0,2).join(" ")),1),l("span",Vl,u(t.position),1)],40,El))),128))])])]),l("div",Nl,[l("div",jl,[l("div",Wl,[(c(!0),p(oe,null,ie(Q.value,t=>(c(),p("div",{class:"p-0 m-0",key:t.id,style:{position:"relative"}},[l("div",{class:"shadow-2",style:ce({"background-color":Ce(t.date),color:"white","border-radius":"0.5rem 0.5rem 0 0",display:"flex","align-items":"center","justify-content":"space-beetwen"})},[l("p",Fl,u(t.date.toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"America/Bogota"})),1)],4),l("div",Hl,[i(o,{style:{position:"absolute",right:"-1rem",top:"-1rem"},icon:"pi pi-trash text-2xl ",class:"p-button-rounded p-button-danger shadow-5",onClick:a=>_e(t.id)},null,8,["onClick"]),l("div",Ml,[l("div",{class:"shadow-5 p-3 m-0 p-4",style:{"border-radius":"0 0 0.5rem 0.5rem",display:"flex","flex-wrap":"wrap","align-items":"flex-start",gap:"2rem","justify-content":"start",padding:"10px"},onDragover:e[18]||(e[18]=Me(()=>{},["prevent"])),onDrop:a=>Le(t)},[(c(!0),p(oe,null,ie(t.users,a=>{var qe;return c(),p("div",{class:"shadow-2 p-2",key:a.id,style:ce([{"text-align":"center",width:"7rem","aspect-ratio":"1 / 1","background-color":"white",color:"black",position:"relative","border-radius":"0.5rem"},a.rest?"outline:2px solid green;  ":"background-color: white;"])},[l("p",Rl,u(a.name.split(" ").slice(0,1).join(" ")),1),l("img",{class:"shadow-2 p-1",onClick:ne=>ae(a),src:`${O(x)}/read-product-image/96/employer-${a.dni}`,alt:"user.name",onError:ne=>ee(a.gender,ne),style:{width:"3rem","object-fit":"cover",height:"3rem","border-radius":"50%"}},null,40,Al),a.rest?(c(),p("div",Pl,[l("p",Ql,[l("b",null,u((qe=a.contract_type)==null?void 0:qe.toLowerCase().slice(0,13)),1)]),Yl])):(c(),p("div",Jl,[l("p",Gl," De: "+u(new Date(a.arrivalTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))+" A: "+u(new Date(a.departureTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)])),i(o,{style:{position:"absolute",width:"1.5rem",height:"1.5rem",top:"-0.5rem",right:"-0.5rem","font-weight":"bold"},icon:"pi pi-times fw-bold",class:"p-button-rounded p-button-danger p-0",onClick:ne=>ye(a.id)},null,8,["onClick"])],4)}),128))],40,Bl)])])]))),128)),I(" ` ")])])])]),i(s,{visible:z.value,"onUpdate:visible":e[21]||(e[21]=t=>z.value=t),style:{width:"20rem"},modal:!0},{footer:v(()=>[l("div",en,[i(o,{severity:"help",label:"Descansa",onClick:Ee}),i(o,{severity:"success",label:"Aceptar",onClick:$e})])]),default:v(()=>[l("h5",Kl,"Cuantas horas trabajo "+u(b.value.name)+"?",1),Zl,i(k,{modelValue:S.value,"onUpdate:modelValue":e[19]||(e[19]=t=>S.value=t),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},null,8,["modelValue"]),Xl,i(k,{modelValue:C.value,"onUpdate:modelValue":e[20]||(e[20]=t=>C.value=t),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},null,8,["modelValue"])]),_:1},8,["visible"])])}}},an=Ie(ln,[["__scopeId","data-v-141ee6c2"]]);export{an as default};
