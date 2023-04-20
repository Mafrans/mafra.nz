<script>
  import { browser } from "$app/environment";

  let scrollAmount = 0;
  if (browser) {
    window.addEventListener("scroll", () => {
      scrollAmount = window.scrollY / window.innerHeight;
    });
  }
</script>

<div
  class="container"
  style={`max-width: calc(${Math.pow(scrollAmount, 4)}vh * 100 + 500px)`}
>
  <h1>Hello, I'm Malte. I'm a developer in Sweden working on cool things.</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit
    amet tellus cras adipiscing enim eu. Dignissim diam quis enim lobortis
    scelerisque fermentum dui faucibus in. Aliquet enim tortor at auctor urna.
    Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Fringilla
    urna porttitor rhoncus dolor. Duis tristique sollicitudin nibh sit amet.
    Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Morbi leo
    urna molestie at. Sed nisi lacus sed viverra. Senectus et netus et malesuada
    fames ac turpis egestas integer. Facilisi morbi tempus iaculis urna id
    volutpat lacus.
  </p>

  <p>
    Vivamus arcu felis bibendum ut tristique et egestas. Quam vulputate
    dignissim suspendisse in est ante in nibh. A pellentesque sit amet porttitor
    eget dolor morbi non. Vulputate mi sit amet mauris. Tempus iaculis urna id
    volutpat lacus laoreet non curabitur. Lectus vestibulum mattis ullamcorper
    velit sed ullamcorper. Quis enim lobortis scelerisque fermentum dui.
    Tristique magna sit amet purus gravida. Varius quam quisque id diam vel
    quam. Tortor aliquam nulla facilisi cras fermentum. Nisl pretium fusce id
    velit ut tortor. Eleifend mi in nulla posuere sollicitudin aliquam ultrices
    sagittis. Nec feugiat nisl pretium fusce id. Sit amet dictum sit amet justo
    donec enim.
  </p>

  <p>
    Commodo viverra maecenas accumsan lacus vel. Aliquam ut porttitor leo a diam
    sollicitudin. Velit laoreet id donec ultrices tincidunt arcu. Scelerisque in
    dictum non consectetur a erat nam. Facilisis mauris sit amet massa. Donec et
    odio pellentesque diam volutpat commodo sed egestas egestas. Tortor id
    aliquet lectus proin nibh nisl condimentum. Nunc lobortis mattis aliquam
    faucibus purus in. Ipsum nunc aliquet bibendum enim facilisis gravida neque
    convallis a. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
    congue. Quis ipsum suspendisse ultrices gravida. Facilisis volutpat est
    velit egestas dui id ornare. Mauris sit amet massa vitae tortor condimentum.
    Elit eget gravida cum sociis natoque penatibus et magnis dis. Ornare quam
    viverra orci sagittis eu volutpat odio facilisis. Ornare arcu odio ut sem
    nulla pharetra diam. Dui vivamus arcu felis bibendum ut tristique. Sed
    viverra tellus in hac.
  </p>

  <p>
    Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Magna sit amet purus gravida quis. Ullamcorper velit sed ullamcorper morbi
    tincidunt ornare massa eget. Arcu ac tortor dignissim convallis aenean et
    tortor at. Orci sagittis eu volutpat odio. Vel orci porta non pulvinar neque
    laoreet suspendisse interdum consectetur. Arcu risus quis varius quam
    quisque id diam vel quam. Netus et malesuada fames ac turpis egestas.
    Tincidunt tortor aliquam nulla facilisi cras fermentum. Fames ac turpis
    egestas maecenas pharetra convallis. Tristique et egestas quis ipsum
    suspendisse ultrices gravida dictum fusce. Penatibus et magnis dis
    parturient montes nascetur. Diam maecenas sed enim ut. Neque gravida in
    fermentum et sollicitudin ac.
  </p>

  <p>
    Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer.
    Condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
    Quis imperdiet massa tincidunt nunc. Neque convallis a cras semper auctor
    neque. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Posuere morbi
    leo urna molestie at elementum. Molestie ac feugiat sed lectus vestibulum
    mattis ullamcorper velit sed. Phasellus faucibus scelerisque eleifend donec
    pretium vulputate. Ridiculus mus mauris vitae ultricies leo integer
    malesuada nunc. Ac odio tempor orci dapibus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit
    amet tellus cras adipiscing enim eu. Dignissim diam quis enim lobortis
    scelerisque fermentum dui faucibus in. Aliquet enim tortor at auctor urna.
    Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Fringilla
    urna porttitor rhoncus dolor. Duis tristique sollicitudin nibh sit amet.
    Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Morbi leo
    urna molestie at. Sed nisi lacus sed viverra. Senectus et netus et malesuada
    fames ac turpis egestas integer. Facilisi morbi tempus iaculis urna id
    volutpat lacus.
  </p>

  <p>
    Vivamus arcu felis bibendum ut tristique et egestas. Quam vulputate
    dignissim suspendisse in est ante in nibh. A pellentesque sit amet porttitor
    eget dolor morbi non. Vulputate mi sit amet mauris. Tempus iaculis urna id
    volutpat lacus laoreet non curabitur. Lectus vestibulum mattis ullamcorper
    velit sed ullamcorper. Quis enim lobortis scelerisque fermentum dui.
    Tristique magna sit amet purus gravida. Varius quam quisque id diam vel
    quam. Tortor aliquam nulla facilisi cras fermentum. Nisl pretium fusce id
    velit ut tortor. Eleifend mi in nulla posuere sollicitudin aliquam ultrices
    sagittis. Nec feugiat nisl pretium fusce id. Sit amet dictum sit amet justo
    donec enim.
  </p>

  <p>
    Commodo viverra maecenas accumsan lacus vel. Aliquam ut porttitor leo a diam
    sollicitudin. Velit laoreet id donec ultrices tincidunt arcu. Scelerisque in
    dictum non consectetur a erat nam. Facilisis mauris sit amet massa. Donec et
    odio pellentesque diam volutpat commodo sed egestas egestas. Tortor id
    aliquet lectus proin nibh nisl condimentum. Nunc lobortis mattis aliquam
    faucibus purus in. Ipsum nunc aliquet bibendum enim facilisis gravida neque
    convallis a. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
    congue. Quis ipsum suspendisse ultrices gravida. Facilisis volutpat est
    velit egestas dui id ornare. Mauris sit amet massa vitae tortor condimentum.
    Elit eget gravida cum sociis natoque penatibus et magnis dis. Ornare quam
    viverra orci sagittis eu volutpat odio facilisis. Ornare arcu odio ut sem
    nulla pharetra diam. Dui vivamus arcu felis bibendum ut tristique. Sed
    viverra tellus in hac.
  </p>

  <p>
    Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
    Magna sit amet purus gravida quis. Ullamcorper velit sed ullamcorper morbi
    tincidunt ornare massa eget. Arcu ac tortor dignissim convallis aenean et
    tortor at. Orci sagittis eu volutpat odio. Vel orci porta non pulvinar neque
    laoreet suspendisse interdum consectetur. Arcu risus quis varius quam
    quisque id diam vel quam. Netus et malesuada fames ac turpis egestas.
    Tincidunt tortor aliquam nulla facilisi cras fermentum. Fames ac turpis
    egestas maecenas pharetra convallis. Tristique et egestas quis ipsum
    suspendisse ultrices gravida dictum fusce. Penatibus et magnis dis
    parturient montes nascetur. Diam maecenas sed enim ut. Neque gravida in
    fermentum et sollicitudin ac.
  </p>

  <p>
    Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer.
    Condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
    Quis imperdiet massa tincidunt nunc. Neque convallis a cras semper auctor
    neque. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Posuere morbi
    leo urna molestie at elementum. Molestie ac feugiat sed lectus vestibulum
    mattis ullamcorper velit sed. Phasellus faucibus scelerisque eleifend donec
    pretium vulputate. Ridiculus mus mauris vitae ultricies leo integer
    malesuada nunc. Ac odio tempor orci dapibus.
  </p>

  {scrollAmount}
</div>

<style>
  h1 {
    font: var(--font-headline-1);
  }

  p:first-of-type {
    font: var(--font-body-lg);
  }

  .container {
    padding: 2rem;
    background-color: beige;
    margin: 0 auto;
  }
</style>
