# readWord
使用js读取word文档的数据 并打印
```
其实docx就是一个zip包，然后封装了一些xml文件。可以直接将docx的包改后缀为.zip来打开观看。
里面有几个主要的文件。
document.xml 这个就是文档的主要内容
numbering.xml 这个就是标题号，以及标题号的一些属性
styles.xml 这个就是样式列表

通过npm安装一个能查看zip文件的包：adm-zip；
```
