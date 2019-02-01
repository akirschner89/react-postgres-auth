<!-- example HTML of vulnerable inputs powered by PHP-->

<!DOCTYPE html>
<html>
<h3>Vulnerable Input</h3>
<form action="">
    <input name="field" type="text"/>
    <input type="submit"/>
    <h4>Result: <?= $_GET{'field'} ?></h4>

</form>
</html>

