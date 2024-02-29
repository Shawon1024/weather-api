import { param } from 'express-validator';

export const validateCityName = param('city')
  .isString()
  .isIn(['london', 'dublin'])
  .withMessage('City Names Must be Either London or Dublin');
