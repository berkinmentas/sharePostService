const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().alphanum().min(2).max(30).required(),

  surname: Joi.string().min(3).max(16).required(),

  password: Joi.string().min(3).max(16).required(),

  repeat_password: Joi.ref("password"),

  access_token: [Joi.string(), Joi.number()],

  birth_year: Joi.number().integer().min(1900).max(2013),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});

export default schema;
