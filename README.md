# openfaas-typescript
安装template
```
faas template pull https://github.com/gpgkd906/openfaas-typescript
```

创建函数后修改yaml在最后加入以下内容
```yaml
configuration:
  copy:
    - ./common
```
