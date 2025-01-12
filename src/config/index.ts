import { z } from "zod";
import zennv from "zennv";

const schema = z.object({
  // Application variables
  APP_PORT: z.number().default(4000),
  APP_ENV: z.string().default("production"),
  APP_NAME: z.string(),
  APP_KEY: z.string(),
  APP_DEBUG: z.boolean().default(true),
  APP_TIMEZONE: z.string().default("UTC"),
  APP_URL: z.string().default("http://localhost"),

  // application localization
  APP_LOCALE: z.string().default("en"),
  APP_FALLBACK_LOCALE: z.string().default("en"),
  APP_FAKER_LOCALE: z.string().default("en_GB"),

  // application maintenance
  APP_MAINTENANCE_DRIVER: z.string().default("file"),
  APP_MAINTENANCE_STORE: z.string().default("database"),

  // Application encryption
  BCRYPT_ROUNDS: z.number().default(12),

  // Application logging
  LOG_CHANNEL: z.string().default("stack"),
  LOG_STACK: z.string().default("single"),
  LOG_DEPRECATIONS_CHANNEL: z.string().default(""),
  LOG_LEVEL: z.string().default("debug"),

  // Application services
  DB_CONNECTION: z.string().default("sqlite"),
  // DB_HOST: z.string().default("127.0.0.1"),
  // DB_PORT: z.number().default(5432),
  // DB_NAME: z.string().default("my-database"),
  // DB_USERNAME: z.string().default("admin"),
  // DB_PASSWORD: z.string().default("password"),
  // DB_PREFIX: z.string().default(""),
  DB_URL: z.string(),

  // Application DB
  SESSION_DRIVER: z.string().default("database"),
  SESSION_LIFETIME: z.number().default(120),
  SESSION_ENCRYPT: z.boolean().default(false),
  SESSION_PATH: z.string().default("/"),
  SESSION_DOMAIN: z.string().default(""),

  // Application cache
  BROADCAST_DRIVER: z.string().default("log"),
  BROADCAST_CONNECTION: z.string().default("log"),
  FILESYSTEM_DISK: z.string().default("local"),
  QUEUE_CONNECTION: z.string().default("database"),
  CACHE_DRIVER: z.string().default("file"),
  CACHE_STORE: z.string().default("file"),
  CACHE_PREFIX: z.string().default(""),
  MEMCACHED_HOST: z.string().default("127.0.0.1"),

  // Application redis
  REDIS_CLIENT: z.string().default("predis"),
  REDIS_HOST: z.string().default("127.0.0.1"),
  REDIS_PASSWORD: z.string().default(""),
  REDIS_PORT: z.number().default(6379),
  REDIS_DB: z.number().default(0),
  REDIS_PREFIX: z.string().default(""),

  // Application mail
  MAIL_MAILER: z.string().default("log"),
  MAIL_SCHEME: z.string().default(""),
  MAIL_HOST: z.string().default("127.0.0.1"),
  MAIL_PORT: z.number().default(2525),
  MAIL_USERNAME: z.string().default(""),
  MAIL_PASSWORD: z.string().default(""),
  MAIL_FROM_ADDRESS: z.string().default("hello@world.com"),
  MAIL_FROM_NAME: z.string().default("${APP_NAME}"),

  // Application AWS
  AWS_ACCESS_KEY_ID: z.string().default(""),
  AWS_SECRET_ACCESS_KEY: z.string().default(""),
  AWS_DEFAULT_REGION: z.string().default("eu-west-1"),
  AWS_BUCKET: z.string().default(""),
  AWS_USE_PATH_STYLE_ENDPOINT: z.boolean().default(false),

  // Application pusher
  PUSHER_APP_ID: z.string().default(""),
  PUSHER_APP_KEY: z.string().default(""),
  PUSHER_APP_SECRET: z.string().default(""),
  PUSHER_APP_CLUSTER: z.string().default(""),
  PUSHER_APP_HOST: z.string().default(""),
  PUSHER_APP_PORT: z.number().default(6001),
  PUSHER_APP_SECURE: z.boolean().default(false),
  PUSHER_APP_AUTH_HOST: z.string().default(""),
  PUSHER_APP_AUTH_PORT: z.number().default(80),
  PUSHER_APP_AUTH_PATH: z.string().default("/broadcasting/auth"),
  PUSHER_APP_AUTH_SECURE: z.boolean().default(false),
  PUSHER_APP_AUTH_CLIENT: z.string().default(""),
});

export type config = z.infer<typeof schema>;

export const config = zennv({
  schema,
  dotenv: true,
});
