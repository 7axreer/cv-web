<script setup></script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__content">
                <ul class="nav__content-list">
                    <li class="nav__content-list-link">
                        <RouterLink to="/"  >Home</RouterLink>
                    </li>
                    <li class="nav__content-list-link">
                        <RouterLink to="/skills">Skills</RouterLink>
                    </li>
                    <li class="nav__content-list-link">
                        <RouterLink to="/experience">Work experience</RouterLink>
                    </li>
                    <li class="nav__content-list-link">
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li class="nav__content-list-link">
                        <RouterLink to="/contact">Contanct Me</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
