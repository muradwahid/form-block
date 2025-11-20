 <?php
 $id = wp_unique_id( 'bBlocksBForm-' );
 ?>
 <div <?php echo get_block_wrapper_attributes(); ?> id='<?php echo esc_attr( $id ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>' data-content='<?php echo esc_attr( wp_json_encode( $content ) ); ?>'>

 <template id='bFormPhpGetContent' style='display: none;'>
   <?php echo $content; ?>
 </template>
</div>