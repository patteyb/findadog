'use strict';

import angular from 'angular';

export default angular.module('capstone4App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
