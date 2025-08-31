# automation-exercise-playwright

This is an automation project using Playwright

## Instalación del proyecto

- Descargar e instalar [node.js] (https://nodejs.org/en)

- Ejecutar el comando `npm install` en la terminal del proyecto para instalar todas las dependencias requeridas.

## Ejecución del proyecto

- Ejecutar el comando `npm run test` para la ejecucion de todos los test cases creados.

- Ejecutar el comando `npm run test:ui` para abrir el **UI Test Runner** de Playwright y de depurar pruebas de forma interactiva.

- Ejecutar el comando `npm run test:smoke` para ejecutar únicamente los tests marcados con la etiqueta **@smoke**.

- Ejecutar el comando `npm run test:reg` para ejecutar únicamente los tests marcados con al etiqueta **@regression**.

- Ejecutar el comando `npm run test:grep --<expresión>` para ejecutar los tests que coincidan con el patron indicado en la expresión.

- Ejecutar el comando `npm run allure:report` para generar el reporte HTML de Allure a partir de los resultados en allure-results.

- Ejecutar el comando `npm run allure:open` para abrir en el navegador el reporte HTML generado en allure-report.

- Ejecutar el comando `npm run test:allure` para ejecutar Pipeline completo: ejecuta los tests → genera el reporte Allure → abre el reporte en el navegador.

- Ejecutar el comando `npm run allure:clean` para limpiar la carpeta de caché .allure usada por Allure para almacenar histórico.

- Ejecutar el comando `npm run ci:allure` para ejecutar las pruebas y generar el reporte de Allure sin abrirlo (pensado para CI/CD).
