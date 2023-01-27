export default function imageLoader({ src, width, quality }) {
  return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/w_${width},q_${quality}/${src}`;
}
