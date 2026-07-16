<?php

declare(strict_types=1);

namespace OWC\MijnOmgeving\Child\Hooks;

use Yard\Hook\Action;
use Yard\Hook\Filter;

/**
 * Example child-theme hook class.
 *
 * Methods carry #[Action] / #[Filter] attributes; the brave-hooks Registrar
 * wires them up once the class is listed in config/hooks.php.
 */
class Example
{
    #[Filter('body_class')]
    public function addBodyClass(array $classes): array
    {
        $classes[] = 'child-theme';

        return $classes;
    }

    #[Action('wp_footer')]
    public function renderFooterNote(): void
    {
        echo '<!-- Rendered by the child theme Example hook -->';
    }
}
