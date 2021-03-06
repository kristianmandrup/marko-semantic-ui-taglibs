Forms
-----

### Messages

Useful for various data related messages:

-	*success*
-	*errors*
-	*notifications*
-	*warnings*
-	...

```jade
ui-message(ui='red' header='Errors' list='data.userForm.errors')
```

### Fields

Default: text field

`ui-field(ui='large' label='First name')`

Password field

`ui-field(ui='small red' label='Secret' type='password')`

Multiple fields using data

`ui-fields(list='data.userForm.fields')`

```jade
ui-fields
  ui-field(ui='small blue' label='Username')
  ui-field(ui='small green' label='Secret' type='password')
```

### Input

#### Radio

```jade
radio-btn(name='work' value='yes' label='work' field='yes')
radio-btn(name='work' value='no' label='work' field='yes')
```

Buttons from list data

`radio-btns(list='data.work' name='work')`

#### Checkbox

We have SO many Checkbox variants. We need a separate library!

### Form

### Messages

### Combination

```jade
ui-form
  ui-field(ui='large' label='First name')
    line-input(name='username')
  ui-field(ui='large' label='Male')
    check-box(name='male' checked='true')
  ui-field(label='skills')
    drop-down(name='coolSkills' list='data.skills')
  ui-field(label='Extra skills')
    multi-select(name='mySkills' list='data.skills')
  radio-btn(name='work' value='yes' label='work' field='yes')
  radio-btn(name='work' value='no' label='work' field='yes')
```

Or even more tight!

```jade
txt-input(name='username' field='User name')
drop-down(name='coolSkills' list='data.skills' field='Skills')
multi-select(name='mySkills' list='data.skills' field='Skills')
check-box(name='male' checked='true' field='Male')
txt-area(name='text' placeholder='Your text' rows='10' field='Text')

check-boxes(list='data.languages' label='Languages')
radio-btns(list='data.work' name='work')
```
