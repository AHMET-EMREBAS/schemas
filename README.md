# Software development schemas

Create single source of truth file for server and client apps.

## Column Definations

### String Property Definition

```yaml
# yaml-language-server: $schema=./../schemas/column.schema.json
description: String Property
label: Property label
inputType: text
type: string
notInCreate: true
notInUpdate: true
validation:
  type: string
  minLength: 3
  maxLength: 30
  enum:
    - First
    - Second
    - Third
  example: Example string value
  default: Default string value
```

### Number Property Definition

```yaml
# yaml-language-server: $schema=./../schemas/column.schema.json
description: Number Property
label: Property label
inputType: number
type: number
notInCreate: true
notInUpdate: true
validation:
  type: number
  minimum: 3
  maximum: 30
  enum:
    - 1
    - 2
    - 3
  example: 3
  default: 3
```

### Date Property Definition

```yaml
# yaml-language-server: $schema=./../schemas/column.schema.json
description: Date Property
label: Property label
inputType: date
type: date
notInCreate: true
notInUpdate: true
```

### Boolean Property Definition

```yaml
# yaml-language-server: $schema=./../schemas/column.schema.json
description: Date Property
label: Property label
inputType: slider-toggle
type: boolean
notInCreate: true
notInUpdate: true
```

### Object Property Definition

```yaml
# yaml-language-server: $schema=./../schemas/column.schema.json
description: Object Property
label: Property label
inputType: select
type: object
target: Object class name
notInCreate: true
notInUpdate: true
```

### Entity Definition

#### Timestamp Entity

```yaml
# yaml-language-server: $schema=./../schemas/entity.schema.json
name: TimestampEntity
description: TimestampEntity description
abstract: true
columns:
  id:
    type: number
    notInCreate: true
    notInUpdate: true
    primary:
      generated: true

  createdAt:
    createDateColumn: true
    notInCreate: true
    notInUpdate: true

  updatedAt:
    createDateColumn: true
    notInCreate: true
    notInUpdate: true

  deletedAt:
    createDateColumn: true
    notInCreate: true
    notInUpdate: true
```

#### Product Entity

```yaml
# yaml-language-server: $schema=./../schemas/entity.schema.json
name: Product
description: Entity Description
extends: TimestampEntity
columns:
  name:
    type: string
    inputType: text
    label: Product Name
    validation:
      type: string
      minLength: 3
      maxLength: 30

relations:
  category:
    type: One
    target: Category
    inputType: select

required:
  - name
  - category

unique:
  - name
```
