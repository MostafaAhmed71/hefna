import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateRoi} from '../src/utils/calculator.ts';
test('additional purchases and revenue follow the displayed formula',()=>{assert.deepEqual(calculateRoi({customers:300,averageOrder:25,currentRate:25,targetRate:35}),{extraPurchases:30,extraRevenue:750,improvement:10});});
test('lower targets produce no additional sales',()=>{assert.equal(calculateRoi({customers:300,averageOrder:25,currentRate:50,targetRate:20}).extraRevenue,0);});
test('fractional customers round down and decimal rates do not lose whole purchases',()=>{assert.equal(calculateRoi({customers:100,averageOrder:10,currentRate:30.1,targetRate:30.2}).extraPurchases,0);assert.equal(calculateRoi({customers:100,averageOrder:10,currentRate:30.1,targetRate:31.1}).extraPurchases,1);});
test('invalid and negative values do not produce negative or infinite sales',()=>{assert.equal(calculateRoi({customers:-5,averageOrder:Infinity,currentRate:NaN,targetRate:Infinity}).extraRevenue,0);});
test('rates are constrained to zero through one hundred',()=>{assert.equal(calculateRoi({customers:100,averageOrder:10,currentRate:-20,targetRate:200}).extraPurchases,100);});
