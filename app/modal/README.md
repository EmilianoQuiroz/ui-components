# Documentación - Modal Navigation

## Descripción General

Esta carpeta contiene la implementación de un sistema de navegación modal en React Native usando Expo Router. Los modales son ventanas que se superponen sobre el contenido principal de la aplicación, ideales para mostrar información temporal o requerir interacción del usuario sin abandonar el contexto actual.

## Estructura de Archivos

```
modal/
├── _layout.tsx         # Configuración de navegación de la sección modal
├── index.tsx           # Pantalla principal que abre el modal
├── modal-window.tsx    # Primer modal con navegación a segundo modal
└── modal-window2.tsx   # Segundo modal anidado
```

---

## 1. _layout.tsx - Configuración de Navegación

### Propósito
Define la estructura de navegación para todas las pantallas dentro de la carpeta `modal`. Utiliza el componente `Stack` de Expo Router para gestionar la navegación tipo pila (stack navigation).

### Código Explicado

```tsx
export default function ModalLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="modal-window2"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
```

### Componentes Utilizados

#### `<Stack>`
- **Qué es**: Componente de navegación de Expo Router que gestiona una pila de pantallas.
- **Por qué se usa**: Permite organizar múltiples pantallas y controlar cómo se presentan y navegan entre ellas.
- **Prop `screenOptions`**: Configuración global para todas las pantallas del stack.
  - `headerShown: false`: Oculta la barra de navegación superior en todas las pantallas.

#### `<Stack.Screen>`
- **Qué es**: Define una pantalla individual dentro del stack de navegación.
- **Prop `name`**: Nombre del archivo (sin extensión) que representa la pantalla.
- **Prop `options`**: Configuración específica de cada pantalla.

### Configuraciones Clave

1. **index** (Pantalla base): 
   - No tiene opciones especiales
   - Se presenta como pantalla normal

2. **modal-window** y **modal-window2** (Pantallas modales):
   - `presentation: "modal"`: Hace que la pantalla se presente como modal
   - Esto significa que:
     - Se desliza desde abajo (en iOS)
     - Tiene un gesto de deslizar hacia abajo para cerrar
     - Visualmente se ve como una capa sobre la pantalla anterior

---

## 2. index.tsx - Pantalla Principal

### Propósito
Es el punto de entrada de la sección modal. Muestra un botón que permite al usuario abrir el primer modal.

### Código Explicado

```tsx
const ModalScreen = () => {
  return (
    <ThemedView>
      <ThemedButton
        width="full"
        onPress={() => router.push("/modal/modal-window")}
      >
        Open Modal Window
      </ThemedButton>
    </ThemedView>
  );
};
```

### Componentes Utilizados

#### `<ThemedView>`
- **Qué es**: Componente wrapper personalizado que aplica temas consistentes.
- **Por qué se usa**: Asegura que el fondo y estilos se adapten al tema de la aplicación (claro/oscuro).

#### `<ThemedButton>`
- **Qué es**: Botón personalizado con estilos temáticos.
- **Props utilizadas**:
  - `width="full"`: Hace que el botón ocupe todo el ancho disponible.
  - `onPress`: Función que se ejecuta al presionar el botón.

#### `router.push()`
- **Qué es**: Función de Expo Router para navegar a otra pantalla.
- **Parámetro**: Ruta de la pantalla destino (`"/modal/modal-window"`).
- **Por qué se usa**: Abre el modal manteniendo la pantalla actual en el historial de navegación, permitiendo regresar con el botón "atrás" o gesto.

---

## 3. modal-window.tsx - Primer Modal

### Propósito
Primera ventana modal que demuestra navegación entre modales. Permite navegar a un segundo modal o regresar a la pantalla principal.

### Código Explicado

```tsx
export default function ModalWindowScreen() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <ThemeText>modal-window</ThemeText>
      <ThemedButton
        width="full"
        onPress={() => router.push("/modal/modal-window2")}
      >
        Go To Modal 2
      </ThemedButton>
      <ThemedButton width="full" onPress={() => router.back()}>
        Go Back
      </ThemedButton>
    </ThemedView>
  );
}
```

### Componentes Utilizados

#### `<ThemedView>` con estilos
- **`flex: 1`**: Hace que el contenedor ocupe todo el espacio disponible.
- **`justifyContent: "center"`**: Centra los elementos verticalmente.
- **`alignItems: "center"`**: Centra los elementos horizontalmente.
- **`gap: 16`**: Espacio de 16 píxeles entre cada elemento hijo.

**Por qué estos estilos**: Crean un diseño centrado y espaciado uniformemente, típico de una interfaz modal clara y fácil de usar.

#### `<ThemeText>`
- **Qué es**: Componente de texto personalizado con estilos temáticos.
- **Por qué se usa**: Muestra el título del modal de forma consistente con el tema de la app.

#### Botones de Navegación

1. **"Go To Modal 2"**
   ```tsx
   onPress={() => router.push("/modal/modal-window2")}
   ```
   - Navega al segundo modal usando `router.push()`
   - Demuestra navegación anidada entre modales

2. **"Go Back"**
   ```tsx
   onPress={() => router.back()}
   ```
   - Regresa a la pantalla anterior en la pila de navegación
   - `router.back()`: Función que retrocede una pantalla en el historial

---

## 4. modal-window2.tsx - Segundo Modal

### Propósito
Segundo modal en la jerarquía de navegación. Demuestra que los modales pueden apilarse y navegar entre sí.

### Código Explicado

```tsx
export default function ModalWindowScreen2() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <ThemeText>modal-window2</ThemeText>
      <ThemedButton width="full" onPress={() => router.back()}>
        Go Back
      </ThemedButton>
    </ThemedView>
  );
}
```

### Componentes Utilizados

Los componentes son los mismos que en `modal-window.tsx`, pero con funcionalidad más simple:

- **Estructura de layout**: Idéntica al primer modal para mantener consistencia visual.
- **Un solo botón**: Solo incluye la opción de regresar, ya que no hay más modales después.

### Diferencias con modal-window.tsx

1. **Menos opciones de navegación**: Solo permite regresar, no abrir más modales.
2. **Texto identificador diferente**: "modal-window2" para distinguir visualmente en qué modal está el usuario.

---

## Flujo de Navegación

```
index.tsx (Pantalla base)
    ↓ (router.push)
modal-window.tsx (Modal 1)
    ↓ (router.push)
modal-window2.tsx (Modal 2)
    ↓ (router.back)
modal-window.tsx (Modal 1)
    ↓ (router.back)
index.tsx (Pantalla base)
```

### Detalles del Flujo

1. **Usuario inicia en index.tsx**: Ve un botón "Open Modal Window"
2. **Presiona el botón**: Se abre modal-window.tsx sobre la pantalla actual
3. **En el primer modal**: Puede elegir:
   - Ir al segundo modal (modal-window2.tsx)
   - Regresar a la pantalla principal
4. **En el segundo modal**: Solo puede regresar al primer modal
5. **Navegación hacia atrás**: Cada `router.back()` retrocede una pantalla en la pila

---

## Conceptos Clave

### ¿Qué es un Modal?

Un modal es una ventana que se superpone al contenido principal y requiere interacción antes de continuar. Características:

- **Bloquea la interacción** con contenido subyacente
- **Se presenta sobre** la pantalla actual
- **Tiene animación específica** (generalmente desliza desde abajo)
- **Gestual para cerrar** (deslizar hacia abajo en iOS)

### ¿Por qué usar `presentation: "modal"`?

```tsx
options={{
  presentation: "modal",
}}
```

- **Experiencia de usuario intuitiva**: Los usuarios entienden que están en un contexto temporal
- **Animación apropiada**: Entra/sale con animación desde abajo
- **Comportamiento esperado**: Los usuarios esperan poder cerrar un modal con gestos
- **Jerarquía visual clara**: Se ve claramente que es una capa sobre el contenido principal

### Router vs Link

Aunque no se usa en estos archivos, es útil saber las diferencias:

- **`router.push()`**: Navegación programática (en respuesta a eventos, lógica)
- **`<Link>`**: Navegación declarativa (enlaces directos en JSX)

En este caso se usa `router.push()` porque:
1. La navegación ocurre en respuesta a un evento (`onPress`)
2. Da más control sobre cuándo y cómo navegar
3. Permite ejecutar lógica adicional antes de navegar si fuera necesario

---

## Patrón de Diseño Utilizado

### Stack Navigation Pattern

Este patrón mantiene un historial de pantallas en una "pila":

```
[index] → [modal-window] → [modal-window2]
```

**Ventajas**:
- Navegación intuitiva hacia adelante y atrás
- Historial automático
- Transiciones visuales apropiadas

### Component Composition Pattern

Todos los archivos utilizan componentes reutilizables (`ThemedView`, `ThemedButton`, `ThemeText`):

**Ventajas**:
- Consistencia visual en toda la app
- Fácil mantenimiento (cambio en un lugar afecta todo)
- Código más limpio y legible

---

## Mejores Prácticas Demostradas

1. **Separación de responsabilidades**:
   - `_layout.tsx`: Solo configuración de navegación
   - Archivos individuales: Solo su UI específica

2. **Nombres descriptivos**:
   - `modal-window`, `modal-window2`: Indican claramente su propósito
   - Funciones con nombres claros: `ModalScreen`, `ModalWindowScreen`

3. **Estilos inline apropiados**:
   - Estilos específicos de layout (flex, alignment) se colocan inline
   - Estilos temáticos se manejan en componentes personalizados

4. **Navegación clara**:
   - Uso consistente de `router.push()` y `router.back()`
   - Rutas absolutas (`"/modal/modal-window"`) para evitar ambigüedad

---

## Posibles Extensiones

### Agregar Datos al Modal
```tsx
// Pasar parámetros al modal
router.push({
  pathname: "/modal/modal-window",
  params: { userId: "123", name: "Juan" }
});

// Recibir en el modal
const { userId, name } = useLocalSearchParams();
```

### Modal con Backdrop Personalizado
```tsx
<Stack.Screen
  name="modal-window"
  options={{
    presentation: "modal",
    headerShown: true,
    headerTitle: "Mi Modal",
  }}
/>
```

### Prevenir Cierre Accidental
```tsx
// Mostrar confirmación antes de cerrar
const handleClose = () => {
  Alert.alert(
    "¿Cerrar modal?",
    "¿Estás seguro de que quieres salir?",
    [
      { text: "Cancelar", style: "cancel" },
      { text: "Sí", onPress: () => router.back() }
    ]
  );
};
```

---

## Troubleshooting Común

### El modal no se presenta correctamente
- **Verificar**: Que `presentation: "modal"` esté en `options` del `Stack.Screen` en `_layout.tsx`
- **Verificar**: Que la ruta en `router.push()` coincida con el `name` del `Stack.Screen`

### El botón de regresar no funciona
- **Verificar**: Que se esté usando `router.back()` y no `router.push()` para retroceder
- **Verificar**: Que haya una pantalla previa en el stack

### Estilos no se aplican correctamente
- **Verificar**: Que los componentes `Themed*` estén importados correctamente
- **Verificar**: Que `ThemedView` tenga el prop `style` con configuración de flex

---

## Conclusión

Esta implementación demuestra un sistema de navegación modal robusto y escalable usando Expo Router. Los conceptos aquí aplicados son fundamentales para crear experiencias de usuario modernas en aplicaciones móviles, donde los modales permiten interacciones contextuales sin perder el estado de la pantalla principal.

El código es:
- **Mantenible**: Separación clara de responsabilidades
- **Escalable**: Fácil agregar más modales
- **Intuitivo**: Navegación familiar para los usuarios
- **Consistente**: Uso de componentes temáticos reutilizables
