const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const client = redis.createClient({
  port      : 19251,               // replace with your port
  host      : 'redis-19251.c11.us-east-1-2.ec2.cloud.redislabs.com',        // replace with your hostanme or IP address
  password  : 'bnjLiMHGuW9S629JAHyoKV0G0EXPbRzi',    // replace with your password
});

module.exports = client;
