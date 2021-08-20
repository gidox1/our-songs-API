const config = {
  port: process.env.PORT,
  mongodb: {
      mongodb_host: process.env.MONGODB_HOST
  },
  redis: {
      host: process.env.REDIS_PORT_6379_TCP_ADDR || process.env.REDIS_HOST,
      port: process.env.REDIS_PORT_6379_TCP_PORT || process.env.REDIS_PORT || 6379,
      database: process.env.REDIS_DATABASE || 0,
  },
  limit: '50mb',
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRETE
  },
}

module.exports = config;