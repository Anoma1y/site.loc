<?php require_once 'header.php'; ?>
<div class="news_list order_list">
	<table>
		<thead>
			<th>id</th>
			<th>Название</th>
			<th>Текст</th>
			<th>Фото</th>
			<th>Дата</th>
			<th></th>
		</thead>
		<tbody>
			<?php foreach ($news as $item): ?>
				<tr>
					<td><?=$item["id"]?></td>
					<td><?=$item["news_title"]?></td>
					<td><?=$item["news_text"]?></td>
					<td><img src="<?=$item["news_image"]?>" alt=""></td>
					<td><?=$item["news_date"]?></td>
					<td class="tdBtnCloseOrder" data-id="<?=$item["id"]?>">Удалить</td>
				</tr>
			<?php endforeach ?>
		</tbody>
	</table>	
</div>


<script type="text/javascript">
	var btnDelete = document.getElementsByClassName('tdBtnCloseOrder');
	for (var i = 0; i < btnDelete.length; i++) {
		btnDelete[i].addEventListener('click', function(e) {
			var id = e.target.dataset.id;
				if (confirm("Подтвердите удаление") === true) {
					window.location = "../admin/deleteNews/" + id;
				}			
		});
	}
</script>