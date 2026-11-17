// Shade Transport Private Limited - Master Vue.js 3 Application
const { createApp, ref, computed } = Vue;

const FLEET_DATA = window.FLEET_DATA || [];
const NETWORK_NODES = window.NETWORK_NODES || [];

createApp({
  setup() {
    const mobileMenuOpen = ref(false);
    const activeFleetFilter = ref("all");
    const selectedVehicle = ref(null);
    const activeFaq = ref(0);

    // India Map State
    const activeMapFilter = ref("all");
    const selectedNode = ref(
      NETWORK_NODES.find(n => n.id === "delhi") || NETWORK_NODES[1]
    );

    // Filtered Fleet
    const filteredFleet = computed(() => {
      if (activeFleetFilter.value === "all") return FLEET_DATA;
      return FLEET_DATA.filter(item => item.category === activeFleetFilter.value);
    });

    // Filtered Map Nodes
    const filteredMapNodes = computed(() => {
      if (activeMapFilter.value === "all") return NETWORK_NODES;
      if (activeMapFilter.value === "ports") return NETWORK_NODES.filter(n => n.type === "port" || n.type === "hub");
      if (activeMapFilter.value === "metros") return NETWORK_NODES.filter(n => ["mumbai", "delhi", "kolkata", "bengaluru", "chennai", "hyderabad", "ahmedabad", "lucknow"].includes(n.id));
      if (activeMapFilter.value === "regional") return NETWORK_NODES.filter(n => ["kanpur", "agra", "varanasi", "gorakhpur", "patna", "jaipur", "chandigarh", "lucknow"].includes(n.id));
      return NETWORK_NODES;
    });

    const lucknowHub = NETWORK_NODES.find(n => n.id === "lucknow") || { x: 435, y: 250 };

    return {
      mobileMenuOpen,
      activeFleetFilter,
      selectedVehicle,
      activeFaq,
      activeMapFilter,
      selectedNode,
      filteredFleet,
      filteredMapNodes,
      lucknowHub,
      networkNodes: NETWORK_NODES
    };
  }
}).mount('#vue-app');
