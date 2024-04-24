<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */

namespace PrestaShop\Module\PsxMarketingWithGoogle\ProductFilter\FilterApplication\AttributeQueryBuilder;

use DbQuery;
use PrestaShop\Module\PsxMarketingWithGoogle\ProductFilter\Condition;

class PriceQueryBuilder implements QueryBuilderInterface
{
    public function addWhereFromFilter(DbQuery $query, $filter): DbQuery
    {
        // TODO for combinations, think about impact on price
        switch ($filter['condition']) {
            case Condition::CONTAINS:
                return $query->where('(
                    p.price LIKE "%' . (float) $filter['value'] . '%"
                    OR (p.price + pa.price) LIKE "%' . (float) $filter['value'] . '%"
                )');
            case Condition::GREATER:
                return $query->where('(
                    p.price > ' . (float) $filter['value'] . '
                    OR (p.price + pa.price) > ' . (float) $filter['value'] . '
                )');
            case Condition::LOWER:
                return $query->where('(
                    p.price < ' . (float) $filter['value'] . '
                    OR (p.price + pa.price) < ' . (float) $filter['value'] . '
                )');
            case Condition::IS:
                if ($filter['value']) {
                    return $query->where('(
                        p.price = ' . (float) $filter['value'] . '
                        OR (p.price + pa.price) = ' . (float) $filter['value'] . '
                    )');
                }

                return $query->where('(
                    p.price IN [' . implode(', ', array_map('doubleval', $filter['values'])) . ']
                    OR (p.price + pa.price) IN [' . implode(', ', array_map('doubleval', $filter['values'])) . ']
                )');
            case Condition::IS_NOT:
                return $query->where('(
                    p.price NOT IN [' . implode(', ', array_map('doubleval', $filter['values'])) . ']
                    OR (p.price + pa.price) NOT IN [' . implode(', ', array_map('doubleval', $filter['values'])) . ']
                )');
        }

        return $query;
    }

    public function addRelations(DbQuery $query): DbQuery
    {
        return $query->leftJoin('product_attribute', 'pa', 'p.id_product = pa.id_product');
    }
}