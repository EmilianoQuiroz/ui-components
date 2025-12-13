# ThemedButton - Documentación

## ¿Qué es?

`ThemedButton` es un componente de botón personalizado y reutilizable para React Native que proporciona una interfaz consistente y flexible para todos los botones de la aplicación. Está construido sobre el componente `Pressable` de React Native.

## ¿Por qué se creó?

Este componente se creó para:
- **Consistencia**: Mantener un diseño uniforme de botones en toda la aplicación
- **Reutilización**: Evitar duplicar código de estilos en cada pantalla
- **Flexibilidad**: Permitir personalización rápida sin escribir estilos manualmente
- **Mantenibilidad**: Centralizar cambios de diseño en un solo lugar
- **Accesibilidad**: Usar colores y tamaños estandarizados del sistema de diseño

## Instalación y Uso Básico

```tsx
import ThemedButton from '@/presentation/shared/ThemedButton';

// Ejemplo básico
<ThemedButton onPress={() => console.log('Presionado')}>
  Mi Botón
</ThemedButton>
```

## Props Disponibles

### `children` (string, opcional)
El texto que se muestra dentro del botón.

```tsx
<ThemedButton>Guardar</ThemedButton>
```

---

### `onPress` (función, opcional)
Función que se ejecuta al presionar el botón.

```tsx
<ThemedButton onPress={() => alert('¡Hola!')}>
  Presionar
</ThemedButton>
```

---

### `size` ('sm' | 'md' | 'lg', por defecto: 'md')
Define el tamaño del botón, afectando padding y tamaño de texto.

- **sm**: Botón pequeño (padding: 8px, texto: 14px)
- **md**: Botón mediano (padding: 12px, texto: 16px)
- **lg**: Botón grande (padding: 16px, texto: 20px)

```tsx
<ThemedButton size="sm">Pequeño</ThemedButton>
<ThemedButton size="md">Mediano</ThemedButton>
<ThemedButton size="lg">Grande</ThemedButton>
```

---

### `color` ('primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger', opcional)
Define el color del botón según el sistema de colores de la aplicación.

```tsx
<ThemedButton color="primary">Primario</ThemedButton>
<ThemedButton color="success">Éxito</ThemedButton>
<ThemedButton color="danger">Peligro</ThemedButton>
```

**Por qué existe**: Asegura que todos los botones usen colores consistentes del sistema de diseño definido en `Colors.ts`.

---

### `buttonType` ('fill' | 'outline' | 'disabled', por defecto: 'fill')
Define el estilo visual del botón.

- **fill**: Botón sólido con fondo de color
- **outline**: Botón con borde y fondo transparente
- **disabled**: Botón deshabilitado con apariencia gris

```tsx
<ThemedButton buttonType="fill" color="primary">
  Relleno
</ThemedButton>

<ThemedButton buttonType="outline" color="primary">
  Contorno
</ThemedButton>

<ThemedButton buttonType="disabled">
  Deshabilitado
</ThemedButton>
```

**Por qué existe**: Permite crear jerarquía visual (botones primarios vs secundarios) sin crear componentes separados.

---

### `width` ('full' | 'content', por defecto: 'content')
Define el ancho del botón.

- **full**: Ocupa todo el ancho disponible (100%)
- **content**: Se ajusta al contenido

```tsx
<ThemedButton width="full">Ancho completo</ThemedButton>
<ThemedButton width="content">Ajustado</ThemedButton>
```

---

### `radius` ('none' | 'sm' | 'md' | 'lg' | 'full', por defecto: 'md')
Define el radio de las esquinas del botón.

- **none**: Sin bordes redondeados (0px)
- **sm**: Bordes ligeramente redondeados (5px)
- **md**: Bordes medianos (10px)
- **lg**: Bordes grandes (15px)
- **full**: Bordes completamente redondeados (píldora)

```tsx
<ThemedButton radius="none">Cuadrado</ThemedButton>
<ThemedButton radius="full">Píldora</ThemedButton>
```

---

### `icon` (nombre de icono de Ionicons, opcional)
Agrega un icono al botón usando la biblioteca Ionicons.

```tsx
<ThemedButton icon="heart">Con Icono</ThemedButton>
```

---

### `iconPosition` ('left' | 'right' | 'only', por defecto: 'left')
Define la posición del icono en relación al texto.

- **left**: Icono a la izquierda del texto
- **right**: Icono a la derecha del texto
- **only**: Solo muestra el icono (sin texto)

```tsx
<ThemedButton icon="heart" iconPosition="left">
  Izquierda
</ThemedButton>

<ThemedButton icon="heart" iconPosition="right">
  Derecha
</ThemedButton>

<ThemedButton icon="heart" iconPosition="only" />
```

**Por qué existe**: Permite crear botones de solo icono para barras de herramientas o acciones rápidas.

---

### `iconSize` (número, opcional)
Define el tamaño del icono manualmente. Si no se especifica, se ajusta automáticamente según el `size` del botón.

```tsx
<ThemedButton icon="heart" iconSize={32}>
  Icono Grande
</ThemedButton>
```

---

### `style` (estilo de Pressable, opcional)
Permite agregar estilos personalizados adicionales.

```tsx
<ThemedButton style={{ marginTop: 20 }}>
  Con margen
</ThemedButton>
```

---

### Props heredadas de `PressableProps`
El componente acepta todas las props de React Native `Pressable`, como:
- `disabled`: Deshabilita el botón
- `onPressIn`: Se ejecuta al iniciar la presión
- `onPressOut`: Se ejecuta al soltar
- Y más...

## Ejemplos Completos

### Botón de Acción Principal
```tsx
<ThemedButton
  color="primary"
  size="lg"
  width="full"
  icon="checkmark-circle"
  onPress={handleSubmit}
>
  Confirmar
</ThemedButton>
```

### Botón Secundario
```tsx
<ThemedButton
  color="secondary"
  buttonType="outline"
  size="md"
  onPress={handleCancel}
>
  Cancelar
</ThemedButton>
```

### Botón de Icono Solo
```tsx
<ThemedButton
  color="danger"
  icon="trash"
  iconPosition="only"
  size="sm"
  onPress={handleDelete}
/>
```

### Botón de Advertencia
```tsx
<ThemedButton
  color="warning"
  icon="warning"
  iconPosition="left"
  radius="lg"
  onPress={handleWarning}
>
  Advertencia
</ThemedButton>
```

## Funcionamiento Interno

### Sistema de Colores
El componente utiliza la función `getTextColor()` para determinar el color del texto según:
1. **Tipo de botón**: Los botones `outline` usan el color del tema, los `fill` usan blanco
2. **Color seleccionado**: Se mapea con `Colors.light` del archivo de constantes

**Por qué**: Asegura contraste legible entre texto y fondo.

### Tamaño de Iconos Automático
Si no se especifica `iconSize`, el componente calcula automáticamente:
- `sm`: 16px
- `md`: 20px
- `lg`: 24px

**Por qué**: Mantiene proporciones visuales correctas sin configuración manual.

### Estilos Dinámicos
El componente usa estilos condicionales para:
- Cambiar background según `buttonType` y `color`
- Aplicar bordes solo a botones `outline`
- Ajustar padding según `size`
- Manejar ancho según `width`

**Por qué**: Un solo componente puede servir múltiples propósitos sin crear variantes separadas.

### Estado de Pressable
Usa el patrón de función de estilo `style={(state) => [...]}` para:
- Permitir estilos personalizados que reaccionen al estado de presión
- Combinar estilos del componente con los proporcionados por el usuario

**Por qué**: Mantiene flexibilidad mientras conserva la funcionalidad del componente.

## Notas Importantes

1. **Colores**: Los colores se importan de `@/constants/Colors.ts`. Para agregar nuevos colores, actualiza ese archivo primero.

2. **Iconos**: Solo se pueden usar iconos de la biblioteca Ionicons. Consulta [icons.expo.fyi](https://icons.expo.fyi) para ver los disponibles.

3. **Accesibilidad**: El componente hereda las propiedades de accesibilidad de `Pressable`. Considera agregar `accessibilityLabel` cuando uses iconos solos.

4. **Performance**: El componente recalcula estilos en cada render. Esto es normal para componentes pequeños, pero considera optimizar si notas problemas de rendimiento.

## Mejoras Futuras Sugeridas

- Agregar soporte para temas oscuros/claros
- Implementar animaciones de presión
- Agregar estados de carga (loading spinner)
- Soporte para múltiples iconos
- Variantes de tamaño personalizadas
