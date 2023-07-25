# az-image-server

Apollo Server to handle to get images from site
[https://placekeanu.com/](https://placekeanu.com/)

The images can be getted by sending these parameters
`width`, `height`, `young` and `grayscale`

Can be Docker containerized.

# Build Docker

### `docker build -t az-image-server .`

# Run Docker

### `docker run -dp 127.0.0.1:4000:4000 az-image-server`

# Query

```
query ImageQuery(
    $width: Int!,
    $height: Int!,
    $young: Boolean,
    $grayscale: Boolean
) {
    image(
    width: $width,
    height: $height,
    young: $young,
    grayscale: $grayscale
    ) {
        data
    }
}
```
