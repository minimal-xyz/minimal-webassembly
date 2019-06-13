
(module
  (import "stdlib" "print" (func $print (param i32 i32)))
  (import "js" "mem" (memory 20))
  (data (i32.const 0) "Hello World")
  (func (export "main")
    i32.const 0  ;; pass offset 0 to log
    i32.const 20 ;; pass length 20 to log
    call $print)
  (func (export "add") (param $p i32) (result i32)
    local.get $p
    local.get $p
    i32.add)
)
